import * as React from 'react';

export const IntersectionTarget = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

IntersectionTarget.displayName = 'Container:IntersectionTarget';
