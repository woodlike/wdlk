/** @jsx jsx */
import { Fragment } from 'react';
import { Global } from '@emotion/core';
import { jsx } from 'theme-ui';
import { Main } from '../../../components';
import { Sidebar } from '../Sidebar';

const globalStyles = {
  body: {
    margin: 0,
  },
};

export const Layout: React.FC = (props): JSX.Element => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Sidebar />
      <Main>{props.children}</Main>
    </Fragment>
  );
};

Layout.displayName = 'DoczLayout';
