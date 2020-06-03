import { calcThreshold } from '..';

describe('useIntersectionObserver()', () => {
  describe('calcThreshold()', () => {
    it('should return an uniform distribution of steps ', () => {
      expect(calcThreshold(1)).toBe(1.0);
      expect(calcThreshold(2)).toEqual([0, 0.5]);
      expect(calcThreshold(3)).toEqual([0, 0.33, 0.67]);
      expect(calcThreshold(5)).toEqual([0, 0.2, 0.4, 0.6, 0.8]);
      expect(calcThreshold(10)).toMatchSnapshot();
      expect(calcThreshold(100)).toMatchSnapshot();
    });
  });
});
