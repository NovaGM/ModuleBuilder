import ModuleRepos from './modules/index.js';
import AutoTag from './autoTag.js';
import WebhookSend from './webhook.js';

import Parcel from 'parcel-bundler';
import axios from 'axios';
import glob from 'glob';

import { rmSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, existsSync, rmdirSync } from 'fs';
import { createHash } from 'crypto';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

let file;
let githubPAT;
try {
  file = JSON.parse(readFileSync('./gh_pat.json'));
  githubPAT = file.token;
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  githubPAT = process.env.GHTOKEN;
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const clonesDir = `${__dirname.replace('/src', '')}/clones`;

const distDir = `${__dirname.replace('/src', '')}/dist`;

const modulesDir = `${distDir}/module`;

const resetDir = (dir) => {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
};

if (process.argv[2] === '-f') {
  resetDir(clonesDir);
  
  resetDir(distDir);
  resetDir(modulesDir);
}

let previous = [];
if (existsSync(clonesDir)) {
  for (const cloneDir of glob.sync(`${clonesDir}/*/*`)) {
    process.chdir(cloneDir);
    
    const currentHash = await new Promise((res) => exec(`git rev-parse HEAD`, (err, stdout) => res(stdout.trim())));
    
    const moduleInRepos = ModuleRepos.map(
      (x) => x.modules.filter(
        (y) => y[0] === cloneDir.replace(`${clonesDir}/`, '') && (y[1] === currentHash || !y[1])
      )
    ).find((x) => x.length > 0);

    if (moduleInRepos) {
      previous = previous.concat(moduleInRepos);
    }
  }
}

import { exec } from 'child_process';

const parcelOptions = {
  minify: true,
  watch: false,
  sourceMaps: false,
  outDir: modulesDir,
  logLevel: 0
};

const githubCache = {};

const getGithubInfo = async (repo) => {
  if (githubCache[repo]) return githubCache[repo];
  
  const info = (await axios.get(`https://api.github.com/repos/${repo}`, {
    headers: {
      'Authorization': `token ${githubPAT}`
    }
  })).data;

  githubCache[repo] = info;
  return info;
};

let oldTotalModulesJson = [];

for (const parentRepo of ModuleRepos) {
  let moduleJson = {
    modules: [],
    meta: parentRepo.meta
  };

  const repoJsonPath = `${distDir}/${parentRepo.filename}.json`;

  const currentRepoJson = existsSync(repoJsonPath) ? JSON.parse(readFileSync(repoJsonPath, 'utf8')) : undefined;

  for (const repo of parentRepo.modules) {
    console.time(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);
    
    const name = repo[0];
    const cloneDir = `${clonesDir}/${name}`;
    const moduleDir = repo[2] || '';

    if (previous.includes(repo)) {
      let currentModule = currentRepoJson.modules.filter((x) => x.github.repo === repo[0]);
      if (currentModule.length > 1) {
        const manifest = JSON.parse(readFileSync(`${cloneDir}${moduleDir}/goosemodModule.json`));

        currentModule = currentModule.find((x) => x.name === manifest.name);
      } else {
        currentModule = currentModule[0];
      }
  
      moduleJson.modules.push(currentModule);
      
      process.stdout.write('[SKIP] ');
      
      console.timeEnd(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);
      
      continue;
    }
  
    const githubInfo = await getGithubInfo(repo[0]);
    
    // console.log(repo);
    
    const url = `https://github.com/${repo[0]}.git`;
    const commitHash = repo[1];
    
    const preprocessor = repo[3];
    
    //  resetDir(cloneDir);
    //  rmSync(cloneDir, { recursive: true, force: true });

    // if (existsSync(cloneDir)) rmSync(cloneDir, { recursive: true, force: true });
    
    await new Promise((res) => exec(`git clone ${url} ${cloneDir}`, res));
    
    process.chdir(cloneDir);
    
    const lastHash = await new Promise((res) => exec(`git rev-parse HEAD`, (err, stdout) => res(stdout.trim())));
    
    await new Promise((res) => exec(`git checkout ${commitHash}`, res));
    
    if (preprocessor) {
      (await import(`./preprocessors/${preprocessor}.js`)).default(`${cloneDir}${moduleDir}`, repo);
    }
    
    const manifest = JSON.parse(readFileSync(`${cloneDir}${moduleDir}/goosemodModule.json`));
    
    // console.log(manifest);
    
    const outFile = `${manifest.name}.js`;
    
    const bundler = new Parcel(`${cloneDir}${moduleDir}/${manifest.main}`, Object.assign(parcelOptions, {
      outFile
    }));
    
    const bundle = await bundler.bundle();
    
    const outPath = `${modulesDir}/${outFile}`;
    let jsCode = readFileSync(outPath, 'utf8');
    
    jsCode = `${jsCode};parcelRequire('${bundle.entryAsset.basename}').default`; // Make eval return the index module's default export
    
    // console.log(jsCode);
    
    writeFileSync(outPath, jsCode);
    
    const jsHash = createHash('sha512').update(jsCode).digest('hex');
    
    const manifestJson = {
      name: manifest.name,
      description: manifest.description,
      
      version: manifest.version,
      
      tags: AutoTag(jsCode, manifest.tags),
      
      authors: manifest.authors,
      
      hash: jsHash,
      
      github: {
        stars: githubInfo.stargazers_count,
        repo: repo[0]
      },

      ...repo[4]
    };
    
    if (manifest.images) manifestJson.images = manifest.images;
    if (manifest.dependencies) manifestJson.dependencies = manifest.dependencies;
    
    moduleJson.modules.push(manifestJson);
    
    console.timeEnd(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);
    
    // console.log(lastHash);
    
    if (commitHash !== '' && lastHash !== commitHash) {
      console.log('[Warning] Commit hash in modules does not match latest commit in repo');
    }
  }

  writeFileSync(repoJsonPath, JSON.stringify(moduleJson));

  oldTotalModulesJson = oldTotalModulesJson.concat(moduleJson.modules);
}

writeFileSync(`${distDir}/modules.json`, JSON.stringify(oldTotalModulesJson));

copyFileSync(`${__dirname.replace('/src', '')}/_headers`, `${distDir}/_headers`);

WebhookSend();
