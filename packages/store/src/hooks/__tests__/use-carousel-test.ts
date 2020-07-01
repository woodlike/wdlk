import { previous, next } from '..';

describe('useCarousel()', () => {
  describe('previous()', () => {
    it.each([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])(
      'should return the previous index of %i',
      idx => {
        expect(previous(idx, 11)).toBe(idx > 0 ? idx - 1 : 10);
      },
    );
  });
  describe('next()', () => {
    it.each([0, 1, 1, 3, 4, 5, 6, 7, 8, 9, 10])(
      'should return the previous index of %i',
      idx => {
        expect(next(idx, 11)).toBe(idx < 10 ? idx + 1 : 0);
      },
    );
  });
});
