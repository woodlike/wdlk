import { renderHook, act } from '@testing-library/react-hooks';
import { previous, next, useCarousel, jump, move } from '..';

const createTouchEventMock = (x: number, width: number) =>
  (({
    preventDefault: jest.fn(),
    touches: [
      {
        clientX: x,
        target: {
          width,
        },
      },
    ],
  } as unknown) as TouchEvent);

describe('UseCarousel', () => {
  let width: number;
  let length: number;
  beforeEach(() => {
    width = 375;
    length = 6;
  });

  afterEach(() => {
    width = (undefined as unknown) as number;
    length = (undefined as unknown) as number;
  });

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

  describe('move()', () => {
    it('should return an absolute 2.666 percentage [swipe right to left]', () => {
      const startEvent = createTouchEventMock(275, width);
      const moveEvent = createTouchEventMock(265, width);
      const moveInit = {
        event: moveEvent,
        startX: startEvent.touches[0].clientX,
        current: 2,
        length,
      };

      expect(move(moveInit)).toMatchObject({ percentage: 2.667 });
    });

    it('should return an absolute 34.667 percentage [swipe left to right]', () => {
      const startEvent = createTouchEventMock(20, width);
      const moveEvent = createTouchEventMock(150, width);
      const moveInit = {
        event: moveEvent,
        startX: startEvent.touches[0].clientX,
        current: 0,
        length,
      };

      expect(move(moveInit)).toMatchObject({ percentage: 34.667 });
    });

    it('should return an absolute 34.667 percentage [swipe right to left]', () => {
      const startEvent = createTouchEventMock(150, width);
      const moveEvent = createTouchEventMock(20, width);
      const moveInit = {
        event: moveEvent,
        startX: startEvent.touches[0].clientX,
        current: 3,
        length,
      };

      expect(move(moveInit)).toMatchObject({ percentage: 34.667 });
    });

    it('should return the coordinate -19.111 [swipe right to left]', () => {
      const startEvent = createTouchEventMock(40, width);
      const moveEvent = createTouchEventMock(-15, width);

      const moveInit = {
        event: moveEvent,
        startX: startEvent.touches[0].clientX,
        current: 1,
        length,
      };
      expect(move(moveInit)).toMatchObject({ coordinate: -19.111 });
    });

    it('it should return the coordinate (-2.444 - currentCoordinate) for each item in the carousel [swipe right to left]', () => {
      const startEvent = createTouchEventMock(40, width);
      const moveEvent = createTouchEventMock(-15, width);

      Array.from({ length }).forEach((_, idx) => {
        const moveInit = {
          event: moveEvent,
          startX: startEvent.touches[0].clientX,
          current: idx,
          length,
        };

        expect(move(moveInit)).toMatchSnapshot();
      });
    });

    it('should return the coordinate -44.667 [swipe left to right]', () => {
      const startEvent = createTouchEventMock(180, width);
      const moveEvent = createTouchEventMock(300, width);
      const moveInit = {
        event: moveEvent,
        startX: startEvent.touches[0].clientX,
        current: 3,
        length,
      };
      expect(move(moveInit)).toMatchObject({ coordinate: -44.667 });
    });

    it('should return the coordinate (-5.333 + currentCoordinate) for each item in the carousel [swipe left to right]', () => {
      const startEvent = createTouchEventMock(180, width);
      const moveEvent = createTouchEventMock(300, width);
      Array.from({ length }).forEach((_, idx) => {
        const moveInit = {
          event: moveEvent,
          startX: startEvent.touches[0].clientX,
          current: idx,
          length,
        };

        expect(move(moveInit)).toMatchSnapshot();
      });
    });
  });
});
