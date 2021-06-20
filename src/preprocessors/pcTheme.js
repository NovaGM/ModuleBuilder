import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import sass from 'sass';

export default (manifestPath, repo) => {
  const pcManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  let manifest = {
    main: 'index.js',
    tags: ['theme', 'port'],

    name: pcManifest.name,
    description: pcManifest.description,

    version: pcManifest.version,
    authors: [ pcManifest.author ]
  };

  rmSync(manifestPath);
  mkdirSync(manifestPath);

  if (pcManifest.theme.split('.').pop() === 'scss') {
    const cssPath = pcManifest.theme.split('.').slice(0, -1).concat('css').join('.');

    const compiled = (sass.renderSync({ file: pcManifest.theme })).css;
    writeFileSync(cssPath, compiled);

    pcManifest.theme = cssPath;
  }

  const content = readFileSync(pcManifest.theme, 'utf8');

  const jsCode = `// Generated by MS2Builder - pcTheme preprocessor / porter
let style;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document.createElement("style");
      document.head.appendChild(style);
      style.appendChild(
        document.createTextNode(
          \`${content}\`
        )
      );
    },
  
    onRemove: async () => {
      style.remove();
    },
  }
};`;

  writeFileSync(`${manifestPath}/goosemodModule.json`, JSON.stringify(manifest));
  writeFileSync(`${manifestPath}/index.js`, jsCode);
};
