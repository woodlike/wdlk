import { mdxAst } from '../../__mocks__';
import { findNodeByType } from '../mdx';

describe('MDX utils', () => {
  it('should return the Yaml node from the MDX AST', () => {
    const node = findNodeByType(mdxAst, 'yaml');
    expect(node).toStrictEqual({
      type: 'yaml',
      value: 'name: Heading\nmenu: Components',
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 4,
          column: 4,
          offset: 38,
        },
        indent: [1, 1, 1],
      },
    });
  });
});
