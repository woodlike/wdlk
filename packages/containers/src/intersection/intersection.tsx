import * as React from 'react';

export interface IntersectionProps {
  readonly options: IntersectionOptions;
  render(data: IntersectionRenderData): JSX.Element;
}

export interface IntersectionOptions {
  readonly threshold: number | number[];
  readonly rootMargin?: string;
  readonly root?: Element;
}

export interface IntersectionRenderData {
  readonly targetRef: React.RefObject<Element>;
}

export const Intersection: React.FC<IntersectionProps> = (props): JSX.Element => {
  const targetRef = React.useRef<Element>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      return console.log(entries, '((((((((');
    }, props.options);
    observer.observe(targetRef.current as Element);

    return (): void => {
      observer.unobserve(targetRef.current as Element);
    };
  }, []);

  const data = {
    targetRef,
  };

  return props.render(data);
};

Intersection.displayName = 'Container:Intersection';
