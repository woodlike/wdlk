import * as React from 'react';
import { useIntersectionCtx } from '.';

export interface IntersectionTargetProps {
  children(data: TargetRenderData): JSX.Element;
}

export interface TargetRenderData {
  readonly targetRef: React.RefObject<unknown>;
  readonly entry: IntersectionObserverEntry;
}

export interface IntersectionEntryInit {
  readonly time: DOMHighResTimeStamp;
  readonly boundingClientRect: Pick<DOMRectReadOnly, PickedDOMRect>;
  readonly isIntersecting: boolean;
  readonly intersectionRatio: number;
  readonly rootBounds?: Pick<DOMRectReadOnly, PickedDOMRect>;
}

export type PickedDOMRect =
  | 'x'
  | 'y'
  | 'width'
  | 'height'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';

const entryDomRectInitValue: Pick<DOMRectReadOnly, PickedDOMRect> = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const intEntryInitValue: IntersectionEntryInit = {
  time: 0,
  isIntersecting: false,
  intersectionRatio: 0,
  boundingClientRect: { ...entryDomRectInitValue },
  rootBounds: { ...entryDomRectInitValue },
};

export const Target: React.FC<IntersectionTargetProps> = (
  props,
): JSX.Element => {
  const { options } = useIntersectionCtx();
  const targetRef = React.useRef<unknown>(null);
  const [intEntryValue, setIntEntryValue] = React.useState<
    IntersectionObserverEntry
  >(intEntryInitValue as IntersectionObserverEntry);

  React.useEffect(() => {
    function updateEntry(entries: IntersectionObserverEntry[]): void {
      setIntEntryValue(entries[0]);
    }

    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(targetRef.current as Element);

    return (): void => observer.unobserve(targetRef.current as Element);
  }, [intEntryValue.isIntersecting]);

  const data: TargetRenderData = {
    targetRef,
    entry: intEntryValue,
  };

  return props.children(data);
};

Target.displayName = 'Container:IntersectionTarget';
