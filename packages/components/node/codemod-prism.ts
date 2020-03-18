/* eslint-disable @typescript-eslint/no-var-requires */

import { File, ImportDeclaration, ExportDefaultDeclaration, Program } from '@babel/types';

const { default: generate } = require('@babel/generator');
const { dirname, resolve } = require('path');
const { parse } = require('@babel/parser');
const { readdirSync, readFileSync, writeFile } = require('fs');
const prettier = require('prettier');
const t = require('@babel/types');

const pathToPrism = dirname(require.resolve('prismjs'));
const languages = [
  'markup',
  'bash',
  'css',
  'css-extras',
  'clike',
  'javascript',
  'jsx',
  'js-extras',
  'git',
  'graphql',
  'json',
  'ocaml',
  'reason',
  'tsx',
  'typescript',
  'yaml',
];
const path = `${pathToPrism}/components`;
const outputPath = resolve('./src', 'code/__prism/', 'index.ts');

const introFileComment =
  'This is an auto-generated file to override the default Prism languages. Check the node directory to see the implementation or run the prism:lang command on this package to generate a fresh set of languages.';

const typeCheckComment = `
//@ts-nocheck
/* eslint no-var: 0 */
/* eslint @typescript-eslint/camelcase: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
`;

function createImportNode(name: string, vendor: string): ImportDeclaration {
  return t.importDeclaration([t.importNamespaceSpecifier(t.identifier(name))], t.stringLiteral(vendor));
}

function createExportNode(name: string): ExportDefaultDeclaration {
  return t.exportDefaultDeclaration(t.identifier(name));
}

function getLanguages(path: string, langs: string[]): string[] {
  const files = readdirSync(path, 'utf-8');
  return langs.map(lang => files.find((f: string) => f === `prism-${lang}.js`));
}

function parseLangs(path: string, files: string[]): File {
  const source = files.map(file => readFileSync(`${path}/${file}`, 'utf-8')).join(' ');
  return parse(`${source}`);
}

function generateVendorCode(ast: File): string {
  const importNode = createImportNode('Prism', 'prismjs');
  const exportNode = createExportNode('Prism');
  const config = {
    bracketSpacing: true,
    parser: 'babel',
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
  };

  const newAst: Partial<Program> = {
    type: 'Program',
    body: [importNode, ...ast.program.body, exportNode],
  };

  const { code } = generate(newAst, { auxiliaryCommentBefore: introFileComment });
  return prettier.format(typeCheckComment.concat(code), config);
}

function generateFile(data: string, path: string): void {
  try {
    writeFile(path, data, 'utf-8', (err: Error) => {
      if (err) {
        throw new Error(`Error writting the file file: ${err}`);
      }
      console.log('Your Prism file was successfully written!');
    });
  } catch (error) {
    console.error(error);
  }
}

generateFile(generateVendorCode(parseLangs(path, getLanguages(path, languages))), outputPath);
