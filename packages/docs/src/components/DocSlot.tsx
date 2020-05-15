/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Rows, Row, Theme } from '@wdlk/components';

export interface DocSlotProps {
  content: JSX.Element;
}

const stylesContent: SxStyleProp = {
  minHeight: '100vh',
  padding: (theme: Theme) => `${theme.space[8]}px ${theme.space[4]}px`,
};

const stylesContentSingle: SxStyleProp = {
  [`@media screen and (min-width: 1024px)`]: {
    maxWidth: '768px',
    padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[8]}px`,
  },
};

const stylesContentMultiple: SxStyleProp = {
  [`@media screen and (min-width: 1024px)`]: {
    maxWidth: '50%',
    padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[8]}px`,
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

  [`@media screen and (min-width: 1024px)`]: {
    maxWidth: '50%',
    padding: (theme: Theme) => `${theme.space[6]}px ${theme.space[4]}px`,
    backgroundColor: 'codeBg',
    borderColor: (theme: Theme) => theme.colors.grays[4],
  },
};

const createStylesContent = (isSingleContent: boolean): SxStyleProp => ({
  ...stylesContent,
  ...(isSingleContent ? stylesContentMultiple : stylesContentSingle),
});

export const DocSlot: React.FC<DocSlotProps> = props => (
  <Rows collapseBelow={4} as="article">
    <Row
      sx={createStylesContent(Boolean(props.children))}
      basis={Boolean(props.children) ? '1/2' : 'fluid'}
      as="section">
      {props.content}
    </Row>
    {Boolean(props.children) && (
      <Row sx={stylesCode} basis="1/2" as="aside">
        {props.children}
      </Row>
    )}
  </Rows>
);

DocSlot.displayName = 'DocSlot';
