import { renderHook, act } from '@testing-library/react-hooks';
import { previous, next, useCarousel, jump } from '..';

describe('UseCarousel', () => {
  describe('useCarousel()', () => {
    it('should return a default coordinate state of 0', () => {
      const { result } = renderHook(() => useCarousel(4));
      const { coordinate } = result.current;
      expect(coordinate).toBe(0);
    });

    it('should return the previous state coordinate if the current is outsite the length scope', () => {
      const { result } = renderHook(() => useCarousel(4));
      act(() => {
        result.current.jump(2);
      });

      expect(result.current.coordinate).toBe(-50);

      act(() => {
        result.current.jump(5);
      });

      expect(result.current.coordinate).toBe(-50);
    });

    it.each([0, 1, 2, 3, 4, 5, 6, 7, 8])(
      'should return the coordinate of %d',
      current => {
        const { result } = renderHook(() => useCarousel(9));

        act(() => {
          result.current.jump(current);
        });

        expect(result.current.coordinate).toMatchSnapshot();
      },
    );

    it.each([8, 7, 6, 5, 4, 3, 2, 1, 0])(
      'should return the previous coordinate of %d',
      current => {
        const { result } = renderHook(() => useCarousel(9));

        act(() => {
          result.current.jump(current);
          result.current.previous();
        });

        expect(result.current.coordinate).toMatchSnapshot();
      },
    );

    it.each([0, 1, 2, 3, 4, 5, 6, 7, 8])(
      'should return the the next coordinate of %d',
      current => {
        const { result } = renderHook(() => useCarousel(9));

        act(() => {
          result.current.jump(current);
          result.current.next();
        });

        expect(result.current.coordinate).toMatchSnapshot();
      },
    );
  });

  describe('jump()', () => {
    it.each([0, 1, 2, 3, 4])('should jump to %d', current => {
      expect(jump(current, 5)).toMatchSnapshot();
    });
  });

  describe('previous()', () => {
    it.each([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])(
      'should return the previous coordinate of %d',
      current => {
        expect(previous(current, 11)).toMatchSnapshot();
      },
    );
  });

  describe('next()', () => {
    it.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(
      'should return the next coordinate of %d',
      current => {
        expect(next(current, 11)).toMatchSnapshot();
      },
    );
  });
});
