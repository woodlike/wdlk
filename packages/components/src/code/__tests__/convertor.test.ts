import { convertor, andromeda, PrismTheme, PrismStyleRule } from '..';

describe('convertor()', () => {
  let stylePropMock1: PrismStyleRule[];
  let stylePropDuplicate: PrismStyleRule[];
  let stylePropDuplicateII: PrismStyleRule[];

  beforeEach(() => {
    stylePropMock1 = [
      {
        types: ['punctuation'],
        style: {
          color: 'rgb(249, 38, 114)',
        },
      },
      {
        types: ['builtin', 'at-rule', 'function'],
        style: {
          color: 'rgb(213, 206, 217)',
        },
      },
    ];
    stylePropDuplicate = [
      {
        types: ['punctuation'],
        style: {
          color: 'rgb(249, 38, 114)',
          backgroundColor: 'rgb(255, 255, 255)',
        },
      },
      {
        types: ['punctuation'],
        style: {
          color: 'rgb(213, 206, 217)',
          backgroundColor: 'rgb(0, 0, 0)',
        },
      },
    ];

    stylePropDuplicateII = [
      {
        types: ['punctuation'],
        style: {
          color: 'rgb(213, 206, 217)',
        },
      },
      {
        types: ['punctuation'],
        style: {
          color: 'rgb(249, 38, 114)',
          backgroundColor: 'rgb(0, 0, 0)',
        },
      },
    ];
  });

  afterEach(() => {
    stylePropMock1 = (undefined as unknown) as PrismStyleRule[];
    stylePropDuplicate = (undefined as unknown) as PrismStyleRule[];
    stylePropDuplicateII = (undefined as unknown) as PrismStyleRule[];
  });

  describe('Error handling', () => {
    beforeEach(() => {
      global.console = ({ error: jest.fn() } as unknown) as Console;
    });

    it('should log an error on missing styles prop', () => {
      convertor({} as PrismTheme);
      expect(console.error).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Error: Your theme should have a styles property (PrismStyles[])');
    });

    it('should log an error on missing types prop', () => {
      convertor({
        styles: [
          {
            style: {
              color: 'rgb(95, 97, 103)',
            },
          },
        ],
      } as PrismTheme);
      expect(console.error).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Error: Your theme should have a types property (string[])');
    });

    it('should log an error on missing types prop', () => {
      convertor({
        styles: [
          {
            types: ['constant'],
            style: {
              color: 'rgb(213, 206, 217)',
            },
          },
          {
            types: ['punctuation'],
            style: {
              color: 'rgb(249, 38, 114)',
            },
          },
          {
            types: ['variable', 'tag', 'char'],
            style: {},
          },
        ],
      } as PrismTheme);
      expect(console.error).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Error: Your theme should have a style property (PrismStyleProp)');
    });
  });

  describe('Create theme map', () => {
    const { plain } = andromeda;
    it('should return a codeTheme with the according value', () => {
      const codeTheme = convertor({ plain, styles: stylePropMock1 });
      expect(codeTheme.get('punctuation')).toStrictEqual({
        color: 'rgb(249, 38, 114)',
      });
    });

    it('should return the first found properties on duplicated styles', () => {
      const codeTheme = convertor({ plain, styles: stylePropDuplicate });
      expect(codeTheme.get('punctuation')).toStrictEqual({
        color: 'rgb(249, 38, 114)',
        backgroundColor: 'rgb(255, 255, 255)',
      });
    });

    it('should return the first found properties on duplicated styles and the last missing properties', () => {
      const codeTheme = convertor({ plain, styles: stylePropDuplicateII });
      expect(codeTheme.get('punctuation')).toStrictEqual({
        color: 'rgb(213, 206, 217)',
        backgroundColor: 'rgb(0, 0, 0)',
      });
    });

    it('should match the snapshot map', () => {
      const codeTheme = convertor(andromeda);
      expect(codeTheme).toMatchSnapshot();
    });
  });
});
