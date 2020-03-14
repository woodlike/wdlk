/* eslint-disable @typescript-eslint/no-var-requires */
import {
  ArgumentPlaceholder,
  CallExpression,
  ExpressionStatement,
  LVal,
  MemberExpression,
  Statement,
  Program,
} from '@babel/types';
const { default: generate } = require('@babel/generator');
const { dirname, resolve } = require('path');
const { parse } = require('@babel/parser');
const { readdir, readFile, writeFile } = require('fs');
const prettier = require('prettier');
const t = require('@babel/types');

type GetExpressionType = [string, CallExpression, ArgumentPlaceholder[]] | [string, MemberExpression];
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

function createExportCallExpNode(name: string, callee: CallExpression, args: ArgumentPlaceholder[]): {} {
  const id = {
    type: 'Identifier',
    name,
  } as LVal;
  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [t.variableDeclarator(id, t.callExpression(callee, [...args]))]),
    [],
  );
}

function createAssignmentExpNode(name: string, init: MemberExpression): {} {
  const id = {
    type: 'Identifier',
    name,
  } as LVal;
  return t.exportNamedDeclaration(t.variableDeclaration('const', [t.variableDeclarator(id, init)]), []);
}

function getExpression(node: ExpressionStatement): GetExpressionType {
  const { expression } = node;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { left, right } = (expression as unknown) as any;
  const name = left.property.name;
  return right.callee ? [name, right.callee, right.arguments] : [name, right.object];
}

function parseAst(path: string, file: string): void {
  readFile(`${path}/${file}`, 'utf-8', (err: Error, source: string) => {
    if (err) {
      throw Error(`There was an error reading the file: ${err}`);
    }
    const prismAst = parse(`${source}`);
    const name = file.split('.');
    name.splice(1, 1, 'ts');

    const body = prismAst.program.body.map((node: ExpressionStatement) => {
      const nodes = getExpression(node);
      if (nodes.length === 3) {
        const [name, callee, args] = nodes;
        return createExportCallExpNode(name, callee, args);
      }
      const [name, init] = nodes;
      return createAssignmentExpNode(name, init);
    });

    generateCode(body, name.join('.'));
  });
}

function generateCode(body: Statement[], file: string): void {
  const path = resolve('./src', 'code/__prism-languages/', file);
  const ast: Partial<Program> = {
    type: 'Program',
    body: [...body],
  };
  const generateConfig = {
    auxiliaryCommentBefore: introFileComment,
  };
  const prettierConfig = {
    bracketSpacing: true,
    printWidth: 120,
    trailingComma: 'all',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
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
