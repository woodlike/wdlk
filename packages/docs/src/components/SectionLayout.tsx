/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Rows, Row, Theme } from '@wdlk/components';

export interface SectionLayoutProps {
  content: JSX.Element;
  code?: JSX.Element;
}

const stylesContent: SxStyleProp = {
  padding: (theme: Theme) => `${theme.space[8]}px ${theme.space[4]}px`,

  [`@media screen and (min-width: 990px)`]: {
    maxWidth: '50%',
    padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[4]}px`,
    borderColor: (theme: Theme) => theme.colors.grays[0],
    borderStyle: (theme: Theme) => theme.borderStyles[4],
    borderWidth: (theme: Theme) => `0 0 ${theme.borderWidths[0]}px`,
  },
};

const stylesCode: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  padding: (theme: Theme) => `${theme.space[8]}px ${theme.space[4]}px`,
  borderColor: (theme: Theme) => theme.colors.whites[1],
  borderStyle: (theme: Theme) => theme.borderStyles[4],
  borderWidth: (theme: Theme) => `0 0 ${theme.borderWidths[0]}px`,
  backgroundColor: 'background',

  [`@media screen and (min-width: 990px)`]: {
    maxWidth: '50%',
    padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[4]}px`,
    backgroundColor: 'codeBg',
    borderColor: (theme: Theme) => theme.colors.grays[4],
  },
};

export const SectionLayout: React.FC<SectionLayoutProps> = props => (
  <Rows collapseBelow={2} as="article">
    <Row sx={stylesContent} basis="1/2" as="section">
      {props.content}
    </Row>
    <Row sx={stylesCode} basis="1/2" as="aside">
      {props.code}
    </Row>
    {props.children}
  </Rows>
);

SectionLayout.displayName = 'SectionLayout';
