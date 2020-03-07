/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Layout as WDLKLayout } from '@wdlk/components';
import { Sidebar } from '../Sidebar';
// import { useRef, useState } from 'react';
// import { Global } from '@emotion/core';

export const Layout: React.FC = (props): JSX.Element => {
  return (
    <Fragment>
      <Sidebar />
      <WDLKLayout.Main position="left">{props.children}</WDLKLayout.Main>
    </Fragment>
  );
};

Layout.displayName = 'DoczLayout';
