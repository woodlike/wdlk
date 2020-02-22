import { toRGB, splitFromDot } from '../';
describe('Token Utils', () => {
  describe('toRGBString()', () => {
    it('should convert an RGB array into an rgb string', () => {
      expect(toRGB([255, 113, 99])).toBe('rgb(255, 113, 99)');
      expect(toRGB([229, 85, 78])).toBe('rgb(229, 85, 78)');
      expect(toRGB([255, 255, 255])).toBe('rgb(255, 255, 255)');
    });
  });

  describe('splitFromDot(str)', () => {
    it('should return an array contain two elements. The word before the dot and the word after', () => {
      expect(splitFromDot('one.two')).toEqual(['one', 'two']);
      expect(splitFromDot('fonts.heading')).toEqual(['fonts', 'heading']);
    });

    it('should return an array containing only one word because dot is missing', () => {
      expect(splitFromDot('verylongwordwithnodot')).toEqual(['verylongwordwithnodot']);
    });
  });
});
