/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Rows, Row, Theme } from '@wdlk/components';

export interface SectionLayoutProps {
  content: JSX.Element;
  code: JSX.Element;
}

const stylesLayout: SxStyleProp = {
  borderColor: (theme: Theme) => theme.colors.whites[1],
  borderStyle: (theme: Theme) => theme.borderStyles[4],
  borderWidth: (theme: Theme) => `0 0 ${theme.borderWidths[0]}px`,
};

const stylesContent: SxStyleProp = {
  padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[4]}px`,
};

const stylesCode: SxStyleProp = {
  padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[4]}px`,
  backgroundColor: 'codeBg',
};

export const SectionLayout: React.FC<SectionLayoutProps> = props => (
  <Rows sx={stylesLayout} collapseBelow={2} as="article">
    <Row sx={stylesContent} basis="1/2" as="section">
      {props.content}
    </Row>
    <Row sx={stylesCode} as="aside">
      {props.code}
    </Row>
    {props.children}
  </Rows>
);

SectionLayout.displayName = 'SectionLayout';
