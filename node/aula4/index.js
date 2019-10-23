const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    if (
      !/\.html$/g.test(fileFullPath)
    ) continue;
    console.log(fileFullPath);
  }
}
readdir('/media/luizotavio/Externo/JS/');
