import { convertor, PrismTheme } from '.';

describe('convertor()', () => {
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
});
