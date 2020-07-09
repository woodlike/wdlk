import { useReducer } from 'react';

export interface UseCarousel {
  readonly coordinate: number;
  jump(idx: number): void;
  previous(): void;
  next(): void;
}

export enum CarouselType {
  jump = 'jump',
  previous = 'previous',
  next = 'next',
}

export type Coordinate = number;
interface State {
  readonly coordinate: number;
  readonly current: number;
  readonly length: number;
}

interface Action {
  readonly type: CarouselType;
  readonly payload?: Payload;
}

interface Payload {
  readonly current: number;
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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case CarouselType.jump: {
      const { current } = action.payload as Payload;
      return {
        ...state,
        ...(current < state.length && {
          coordinate: jump(current, state.length),
        }),
        current,
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
  const [{ coordinate }, dispatch] = useReducer(reducer, initialState);

  const jump = (idx: number): void =>
    dispatch({ type: CarouselType.jump, payload: { current: idx } });

  const next = (): void => dispatch({ type: CarouselType.next });

  const previous = (): void => dispatch({ type: CarouselType.previous });

  return { coordinate, jump, previous, next };
}
