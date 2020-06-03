import * as React from 'react';

export interface IconProps {
  name: 'paypal' | 'advanced';
}

export const Icon: React.FC = props => <svg>{props.children}</svg>;
