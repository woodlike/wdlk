import * as React from 'react';
import { useIntersectionCtx } from '.';

export interface IntersectionTargetProps {
  children(data: TargetRenderData): JSX.Element;
}

export interface TargetRenderData {
  readonly targetRef: React.RefObject<unknown>;
  readonly entry: IntersectionEntryInit;
}

export interface IntersectionEntryInit {
  readonly time: DOMHighResTimeStamp;
  readonly boundingClientRect: Pick<DOMRectReadOnly, PickedDOMRect>;
  readonly isIntersecting: boolean;
  readonly intersectionRatio: number;
  readonly rootBounds?: Pick<DOMRectReadOnly, PickedDOMRect>;
}

export type PickedDOMRect = 'x' | 'y' | 'width' | 'height' | 'top' | 'right' | 'bottom' | 'left';

export const Target: React.FC<IntersectionTargetProps> = (props): JSX.Element => {
  const { options } = useIntersectionCtx();
  const targetRef = React.useRef<unknown>(null);
  const [time, setTime] = React.useState(0);
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [intersectionRatio, setIntersectionRatio] = React.useState(0);
  const [boundingClientRect, setBoundingClientRect] = React.useState<Pick<DOMRectReadOnly, PickedDOMRect>>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [rootBounds, setRootBounds] = React.useState<Pick<DOMRectReadOnly, PickedDOMRect>>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  React.useEffect(() => {
    function updateEntry(entries: IntersectionObserverEntry[]): void {
      const entry = entries[0];

      setTime(entry.time);
      setBoundingClientRect(entry.boundingClientRect);
      setIsIntersecting(entry.isIntersecting);
      setIntersectionRatio(entry.intersectionRatio);
      if (entry.rootBounds) {
        setRootBounds(entry.rootBounds);
      }
    }

    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(targetRef.current as Element);

    return () => observer.unobserve(targetRef.current as Element);
  }, [isIntersecting]);

  const intersectionEntry: IntersectionEntryInit = {
    ...(rootBounds.width > 0 ? rootBounds : undefined),
    time,
    boundingClientRect,
    isIntersecting,
    intersectionRatio,
  };

  const data: TargetRenderData = {
    targetRef,
    entry: intersectionEntry,
  };

  return props.children(data);
};

Target.displayName = 'Container:IntersectionTarget';
