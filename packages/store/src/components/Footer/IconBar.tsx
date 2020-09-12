/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Columns, Theme } from '@wdlk/components';

export interface IconBarItemProps {
  readonly href: string;
}

const stylesIconBar: SxStyleProp = {
  paddingBottom: 7,
};

const stylesIcon: SxStyleProp = {
  display: 'inline-block',
  alignSelf: 'center',
  padding: ({ space }: Theme) => `0 ${space[5]}px`,
};

export const IconBarItem: React.FC<IconBarItemProps> = props => (
  <a
    sx={stylesIcon}
    target="_blank"
    rel="noopener noreferrer"
    href={props.href}>
    {props.children}
  </a>
);

IconBarItem.displayName = 'FooterIconBarItem';

export const IconBar: React.FC = props => (
  <Columns sx={stylesIconBar} justifyContent="center">
    {props.children}
  </Columns>
);

IconBar.displayName = 'FooterIconBar';
