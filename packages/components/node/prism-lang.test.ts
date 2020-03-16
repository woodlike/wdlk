/* eslint-disable @typescript-eslint/no-var-requires */
import { ObjectProperty } from '@babel/types';
import { clike, typeScriptBodyAST } from './__mocks__';
const { handleStatement } = require('./get-node');
const get = require('./get-node');

describe('handle AST body statements', () => {
  it('should return the name and props for a Clike node', () => {
    const [name, props] = get.clikeNode(clike[0]);
    expect(name).toBe('clike');
    props.forEach((prop: ObjectProperty) => expect(prop.type).toBe('ObjectProperty'));
  });
  it('should match the typescript language assignment array representation', () => {
    expect(handleStatement(typeScriptBodyAST[0])[0]).toBe('typescript');
    expect(handleStatement(typeScriptBodyAST[0])).toMatchSnapshot();
  });
  it('should match a ts to typescript language assignment representation', () => {
    expect(handleStatement(typeScriptBodyAST[1])[0]).toBe('ts');
    expect(handleStatement(typeScriptBodyAST[1])).toMatchSnapshot();
  });
});
