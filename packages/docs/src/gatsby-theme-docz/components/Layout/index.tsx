/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Main } from '../../../components';
import { Sidebar } from '../Sidebar';

export const Layout: React.FC = (props): JSX.Element => {
  return (
    <Fragment>
      <Sidebar />
      <Main>{props.children}</Main>
    </Fragment>
  );
};

Layout.displayName = 'DoczLayout';
