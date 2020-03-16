/* eslint-disable @typescript-eslint/no-var-requires */
import {
  ArgumentPlaceholder,
  CallExpression,
  LVal,
  ExportNamedDeclaration,
  MemberExpression,
  ImportDeclaration,
  ObjectProperty,
  ObjectMethod,
  SpreadElement,
  Statement,
} from '@babel/types';
const t = require('@babel/types');

function exportConst(name: string, callee: CallExpression, args: ArgumentPlaceholder[]): ExportNamedDeclaration {
  const id = {
    type: 'Identifier',
    name,
  } as LVal;
  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [t.variableDeclarator(id, t.callExpression(callee, [...args]))]),
    [],
  );
}

exports.exportConst = exportConst;

function assignmentExp(name: string, init: MemberExpression): {} {
  const id = {
    type: 'Identifier',
    name,
  } as LVal;
  return t.exportNamedDeclaration(t.variableDeclaration('const', [t.variableDeclarator(id, init)]), []);
}

exports.assignmentExp = assignmentExp;

function importDeclaration(name: string, moduleName: string): ImportDeclaration {
  return t.importDeclaration([t.importNamespaceSpecifier(t.identifier(name))], t.stringLiteral(moduleName));
}

exports.importDeclaration = importDeclaration;

function clikeBody(name: string, props: (ObjectMethod | ObjectProperty | SpreadElement)[]): Statement {
  const id = {
    type: 'Identifier',
    name,
  } as LVal;
  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [t.variableDeclarator(id, t.objectExpression(props))]),
    [],
  );
}

exports.clikeBody = clikeBody;
