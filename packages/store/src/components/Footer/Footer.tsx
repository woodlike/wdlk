import * as React from 'react';
import { Rows, Row, Small } from '@wdlk/components';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Rows as="footer" collapseBelow={2}>
      <Row>
        <Small scaleIdx={1}>© Woodlike 2020</Small>
      </Row>
    </Rows>
  );
};

Footer.displayName = 'Footer';
