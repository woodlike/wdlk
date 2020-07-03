import { renderHook, act } from '@testing-library/react-hooks';
import { previous, next, useCarousel } from '..';

describe('UseCarousel', () => {
  describe('useCarousel()', () => {
    it('should return a default coordinate of 0', () => {
      const { result } = renderHook(() => useCarousel(4));
      const { coordinate } = result.current;
      expect(coordinate).toBe(0);
    });
    it('should return the previous coordinate if the passed argument is larger than the amount of items', () => {
      const { result } = renderHook(() => useCarousel(4));
      act(() => {
        result.current.set(2);
      });
      expect(result.current.coordinate).toBe(200);

      act(() => {
        result.current.set(5);
      });

      expect(result.current.coordinate).toBe(200);
    });

    it.each([0, 1, 2, 3, 4, 5, 6, 7, 8])(
      'should return the i% coordinate',
      current => {
        const { result } = renderHook(() => useCarousel(9));

        act(() => {
          result.current.set(current);
        });

        expect(result.current.coordinate).toBe(current * 100);
      },
    );
  });
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
