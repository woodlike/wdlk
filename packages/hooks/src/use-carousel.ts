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
  moveStart = 'moveStart',
  moveEnd = 'moveEnd',
}

interface State {
  readonly coordinate: number;
  readonly current: number;
  readonly direction: number;
  readonly length: number;
  readonly percentage: number;
  readonly startX: number;
}

interface Action {
  readonly type: CarouselType;
  readonly current?: number;
  readonly event?: TouchEvent;
}

export interface MoveInit {
  readonly event: TouchEvent;
  readonly startX: number;
  readonly current: number;
  readonly length: number;
}

export interface MoveEndInit {
  readonly state: State;
  readonly threshold: number;
  next(curr: number, length: number): number;
  nextItem(curr: number, length: number): number;
}

export function nextItem(current: number, length: number) {
  return (current + 1 + length) % length;
}

export function previousItem(current: number, length: number) {
  return (current - 1 + length) % length;
}

export function previous(current: number, length: number) {
  return (Math.abs(previousItem(current, length)) * -1 * 100) / length;
}

export function next(current: number, length: number) {
  return (Math.abs(nextItem(current, length)) * -1 * 100) / length;
}

export function jump(current: number, length: number) {
  return (Math.abs(current) * -1 * 100) / length;
}

export function move({ event, startX, current, length }: MoveInit) {
  const { clientX, target } = event.touches[0];
  const { width } = target as HTMLImageElement | HTMLVideoElement;

  const delta = startX - clientX;
  const percentage = (delta * 100) / width;

  const prevCoordinate = (100 / length) * current;
  const coordinate = -prevCoordinate - percentage / length;

  return {
    coordinate: +coordinate.toFixed(3),
    direction: Math.sign(percentage),
    percentage: Math.abs(+percentage.toFixed(3)),
  };
}

export function moveEnd({ state, threshold, next }: MoveEndInit) {
  const { current, direction, percentage, length } = state;
  const prevCoordinate = (100 / length) * current;

  if (percentage >= threshold) {
    if (direction > 0 && current < length - 1) {
      return {
        coordinate: next(current, length),
        current: nextItem(current, length),
      };
    }

    if (direction < 0 && current > 0) {
      return {
        coordinate: previous(current, length),
        current: previousItem(current, length),
      };
    }
  }

  return {
    coordinate: -prevCoordinate,
    current: state.current,
  };
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

    case CarouselType.moveStart: {
      return {
        ...state,
        startX: action.event?.touches[0].clientX ?? 0,
      };
    }

    case CarouselType.move: {
      const moveInit = {
        event: action.event as TouchEvent,
        startX: state.startX ?? 0,
        current: state.current,
        length: state.length,
      };
      const { coordinate, direction, percentage } = move(moveInit);

      return {
        ...state,
        coordinate,
        direction,
        percentage,
      };
    }

    case CarouselType.moveEnd: {
      const moveEndInit = {
        state,
        threshold: 30,
        next,
        nextItem,
      };
      const { coordinate, current } = moveEnd(moveEndInit);
      return {
        ...state,
        coordinate,
        current,
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
  direction: 1,
  length: 0,
  percentage: 0,
  startX: 0,
};

export function useCarousel(length: number): UseCarousel {
  Object.defineProperty(initialState, 'length', {
    value: length,
    writable: false,
  });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [{ coordinate }, dispatch] = useReducer(reducer, initialState);

  const jump = (idx: number) =>
    dispatch({ type: CarouselType.jump, current: idx });

  const next = () => dispatch({ type: CarouselType.next });
  const previous = () => dispatch({ type: CarouselType.previous });

  const moveStart = (event: TouchEvent) =>
    dispatch({ type: CarouselType.moveStart, event });

  const move = (event: TouchEvent) =>
    dispatch({
      type: CarouselType.move,
      event,
    });

  const moveEnd = () => dispatch({ type: CarouselType.moveEnd });

  useEffect(() => {
    carouselRef.current?.addEventListener('touchstart', moveStart, {
      passive: true,
    });
    carouselRef.current?.addEventListener('touchmove', move, { passive: true });
    carouselRef.current?.addEventListener('touchend', moveEnd, {
      passive: true,
    });

    return () => {
      carouselRef.current?.removeEventListener('touchstart', moveStart);
      carouselRef.current?.removeEventListener('touchmove', move);
      carouselRef.current?.removeEventListener('touchend', moveEnd);
    };
  }, []);

  return { coordinate, jump, previous, next, carouselRef };
}
