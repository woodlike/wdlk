import { useEffect, useReducer, useRef, RefObject } from 'react';

export interface UseCarousel {
  readonly coordinate: number;
  readonly carouselRef: RefObject<HTMLDivElement>;
  jump(idx: number): void;
  previous(): void;
  next(): void;
}

export enum CarouselType {
  jump = 'jump',
  previous = 'previous',
  next = 'next',
  move = 'move',
}

export type Coordinate = number;
interface State {
  readonly coordinate: number;
  readonly current: number;
  readonly length: number;
}

interface Action {
  readonly type: CarouselType;
  readonly current?: number;
  readonly touchList?: TouchList;
}

export function nextItem(current: number, length: number): number {
  return (current + 1 + length) % length;
}

export function previousItem(current: number, length: number): number {
  return (current - 1 + length) % length;
}

export function previous(current: number, length: number): Coordinate {
  return (Math.abs(previousItem(current, length)) * -1 * 100) / length;
}

export function next(current: number, length: number): Coordinate {
  return (Math.abs(nextItem(current, length)) * -1 * 100) / length;
}

export function jump(current: number, length: number): Coordinate {
  return (Math.abs(current) * -1 * 100) / length;
}

export function move(offsetLeft: number): number {
  return offsetLeft;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case CarouselType.jump: {
      return {
        ...state,
        ...((action.current as number) < state.length && {
          current: action.current as number,
          coordinate: jump(action.current as number, state.length),
        }),
      };
    }

    case CarouselType.previous: {
      return {
        ...state,
        current: previousItem(state.current, state.length),
        coordinate: previous(state.current, state.length),
      };
    }

    case CarouselType.next: {
      return {
        ...state,
        current: nextItem(state.current, state.length),
        coordinate: next(state.current, state.length),
      };
    }

    case CarouselType.move: {
      console.log('swipe,------- state', state, 'payload', action.touchList);
      console.log(action.touchList, '^^^^^^^^');
      return {
        ...state,
      };
    }

    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}

const initialState: State = {
  coordinate: 0,
  current: 0,
  length: 0,
};

export function useCarousel(length: number): UseCarousel {
  Object.defineProperty(initialState, 'length', {
    value: length,
    writable: false,
  });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [{ coordinate }, dispatch] = useReducer(reducer, initialState);

  const jump = (idx: number): void =>
    dispatch({ type: CarouselType.jump, current: idx });

  const next = (): void => dispatch({ type: CarouselType.next });

  const previous = (): void => dispatch({ type: CarouselType.previous });

  const swipe = (e: TouchEvent): void =>
    dispatch({
      type: CarouselType.move,
      touchList: e.targetTouches,
    });

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }
    carouselRef.current.addEventListener('touchmove', e => swipe(e));

    return () => carouselRef.current?.removeEventListener('touchmove', swipe);
  }, []);

  return { coordinate, jump, previous, next, carouselRef };
}
