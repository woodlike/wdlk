import * as React from 'react';
import { Logo } from '@wdlk/component-library/src';

export function Header(): JSX.Element {
  return (
    <Logo title="demo title" desc="desc" isFocused={true} />
  )
}
