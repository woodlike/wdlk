/* eslint-disable @typescript-eslint/no-var-requires */
const { dirname } = require('path');
const { readdir } = require('fs');

const pathToPrism = dirname(require.resolve('prismjs'));

const langs = [
  'markup',
  'bash',
  'clike',
  'css',
  'css-extras',
  'javascript',
  'jsx',
  'js-extras',
  'git',
  'graphql',
  'handlebars',
  'json',
  'makefile',
  'markdown',
  'ocaml',
  'reason',
  'scss',
  'tsx',
  'typescript',
  'wasm',
  'yaml',
];

function generate(path: string): void {
  console.log(path, '000000000');
  readdir(path, 'utf-8', (err: Error, files: string[]) => {
    if (err) {
      console.error(err);
    }
    const languageFiles = langs.map(lang => files.find(f => f === `prism-${lang}.js`));
    console.log('22222', languageFiles);
  });
}

generate(`${pathToPrism}/components`);
