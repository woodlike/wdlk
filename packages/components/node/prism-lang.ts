/* eslint-disable @typescript-eslint/no-var-requires */
import { File, Statement, Program } from '@babel/types';
const { default: generate } = require('@babel/generator');
const { dirname, resolve } = require('path');
const { parse } = require('@babel/parser');
const { readdir, readFile, writeFile } = require('fs');
const { handleStatement } = require('./handle-statement');
const prettier = require('prettier');
const create = require('./create-nodes');

const pathToPrism = dirname(require.resolve('prismjs'));
const languages = [
  // 'markup',
  // 'bash',
  // 'css',
  // 'css-extras',
  // 'javascript',
  // 'jsx',
  // 'js-extras',
  // 'git',
  // 'graphql',
  // 'json',
  // 'ocaml',
  // 'reason',
  // 'tsx',
  'typescript',
  // 'yaml',
];

const introFileComment =
  'This is an auto-generated file to override the default Prism languages. Check the node directory to see the implementation or run the prism:lang command on this package to generate a fresh set of languages.';

function parseAst(path: string, file: string): void {
  readFile(`${path}/${file}`, 'utf-8', (err: Error, source: string) => {
    if (err) {
      throw Error(`There was an error reading the file: ${err}`);
    }
    const ast = parse(`${source}`);
    const name = file.split('.');
    name.splice(1, 1, 'ts');
    console.log('***********', source);
    console.log('ast--------', ast);

    generateCode(convertASTBody(ast), name.join('.'));
  });
}

function convertASTBody(ast: Partial<File>): Statement[] | [] {
  if (!ast || !ast.program) {
    return [];
  }

  return ast.program.body.map(node => {
    const nodes = handleStatement(node);
    if (nodes.length === 3) {
      const [name, callee, args] = nodes;
      return create.exportConst(name, callee, args);
    }
    const [name, init] = nodes;
    return create.assignmentExp(name, init);
  }) as Statement[];
}

function generateCode(body: Statement[], file: string): void {
  const path = resolve('./src', 'code/__prism-languages/', file);
  const ast: Partial<Program> = {
    type: 'Program',
    body: [create.importDeclaration('Prism', 'prismjs'), ...body],
  };
  const generateConfig = {
    auxiliaryCommentBefore: introFileComment,
  };
  const prettierConfig = {
    bracketSpacing: true,
    parser: 'babel',
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
  };
  const { code } = generate(ast, generateConfig);
  console.log(code, '--------');

  writeFile(path, prettier.format(code, prettierConfig), 'utf-8', (err: Error) => {
    if (err) {
      throw new Error(`Error writting the file file: ${err}`);
    }
  });
}

function collectLangs(path: string): void {
  try {
    readdir(path, 'utf-8', (err: Error, fileNames: string[]) => {
      if (err) {
        throw new Error(`Error reading directory: ${err}`);
      }
      languages
        .map(language => fileNames.find(file => file === `prism-${language}.js`) as string)
        .forEach(file => parseAst(path, file));
    });
  } catch (err) {
    console.error(err);
  }
}

collectLangs(`${pathToPrism}/components`);
