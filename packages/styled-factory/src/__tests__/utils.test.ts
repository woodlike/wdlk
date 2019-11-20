import { toRGB } from '../tokens';
describe('Token Utils', () => {
  describe('toRGBString()', () => {
    it('should convert an RGB array into an rgb string', () => {
      expect(toRGB([255, 113, 99])).toBe('rgb(255, 113, 99)');
      expect(toRGB([229, 85, 78])).toBe('rgb(229, 85, 78)');
      expect(toRGB([255, 255, 255])).toBe('rgb(255, 255, 255)');
    });
  });
});
