import { Token } from 'prismjs';
import { normalizer } from '..';
import { prismTokens } from '../__mocks__/tokens';

describe('normalizer()', () => {
  describe('Error handling', () => {
    beforeEach(() => {
      global.console = ({ error: jest.fn() } as unknown) as Console;
    });

    it('should log an error on missing styles prop', () => {
      const tokens = normalizer({} as (string | Token)[]);
      expect(tokens).toEqual([]);
      expect(console.error).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith(
        'Error: The provided token stream must be of type array returned by the Prism.tokenize(code, grammar)',
      );
    });
  });

  describe('Flattened Token Array', () => {
    let prismTokensMock: (string | Token)[];
    beforeEach(() => {
      prismTokensMock = [
        {
          type: 'tag',
          content: [
            {
              type: 'tag',
              content: [
                {
                  type: 'punctuation',
                  content: '<',
                },
                'pre',
              ],
            },
            ' ',
            {
              type: 'attr-name',
              content: ['sx'],
            },
            {
              type: 'script',
              content: [
                {
                  type: 'script-punctuation',
                  content: '=',
                },
                {
                  type: 'punctuation',
                  content: '{',
                },
                {
                  type: 'function',
                  content: 'createStylesPre',
                },
                'props',
              ],
              alias: 'language-javascript',
            },
          ],
        },
        '\n    ',
      ] as (string | Token)[];
    });

    afterEach(() => {
      prismTokensMock = (undefined as unknown) as (string | Token)[];
    });

    it('should return a flattened token array from the prismTokensMock Mock', () => {
      const result = [
        { type: 'punctuation', content: '<' },
        { type: 'tag', content: 'pre', alias: '', length: 0, greedy: false },
        { type: 'tag', content: ' ', alias: '', length: 0, greedy: false },
        { type: 'attr-name', content: 'sx', alias: '', length: 0, greedy: false },
        { type: 'script-punctuation', content: '=' },
        { type: 'punctuation', content: '{' },
        { type: 'function', content: 'createStylesPre' },
        { type: 'script', content: 'props', alias: '', length: 0, greedy: false },
        { type: 'tag', content: '\n    ', alias: '', length: 0, greedy: false },
      ];
      expect(normalizer(prismTokensMock)).toEqual(result);
    });
    it('should return a flattened token array from a returned by Prism.tokenize() (___mocks___)', () => {
      expect(normalizer(prismTokens)).toMatchSnapshot();
    });
  });
});
