import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import sass from 'sass';

export default (manifestPath, repo) => {
  const pcManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  let manifest = {
    main: '../index.js',
    tags: ['port'],

    name: pcManifest.name,
    description: pcManifest.description,

    version: pcManifest.version,
    authors: [ pcManifest.author ]
  };

  rmSync(manifestPath);
  mkdirSync(manifestPath);

  let content = readFileSync(pcManifest.main || 'index.js', 'utf8');//.replace(/\\/g, '\\\\').replace(/`/g, '\\`');

  content = content.replace(`module.exports = class`, `export default new class`);
  content = content.replace(/this\.loadStylesheet\(['"`](.*)['"`]\)/g, (_, relative) => {
    const path = manifestPath.split('/').slice(0, -1).join('/') + relative;

    let css;

    if (path.split('.').pop() === 'scss') {
      css = (sass.renderSync({ file: path })).css;
    } else {
      css = readFileSync(sync);
    }

    css = css.replace(/\\/g, '\\\\').replace(/\`/g, '\`'); // Escape backticks

    return `this.loadStyleSheet(\`${css}\`)`;
  });

  const jsCode = `import powercord from '_powercord/global';\n` + content;

  writeFileSync(`${manifestPath}/goosemodModule.json`, JSON.stringify(manifest));
  writeFileSync(`${manifestPath}/../index.js`, jsCode);
};
