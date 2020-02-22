import * as React from 'react';

export const Frame: React.FC = props => {
  return (
    <nav role="navigation" aria-label="Primary navigation" data-testid="navigation-panel-test-id">
      {props.children}
    </nav>
  );
};
