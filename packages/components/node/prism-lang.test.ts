/* eslint-disable @typescript-eslint/no-var-requires */
import { typeScriptBodyAST } from './__mocks__';
const { handleStatement } = require('./handle-statement');

describe('handle AST body statements', () => {
  it('should match the typescript language assignment array representation', () => {
    expect(handleStatement(typeScriptBodyAST[0])[0]).toBe('typescript');
    expect(handleStatement(typeScriptBodyAST[0])).toMatchSnapshot();
  });
  it('should match a ts to typescript language assignment representation', () => {
    expect(handleStatement(typeScriptBodyAST[1])[0]).toBe('ts');
    expect(handleStatement(typeScriptBodyAST[1])).toMatchSnapshot();
  });
});
