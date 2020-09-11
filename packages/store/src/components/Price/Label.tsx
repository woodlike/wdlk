/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

const stylesLabel: SxStyleProp = {
  display: 'inline-block',
  color: ({ colors }: Theme) => colors.grays[1],
  fontFamily: 'body',
  fontSize: ({ fontSizes }: Theme) => fontSizes[0],
  fontWeight: 300,
  lineHeight: 1,
};

export const Label: React.FC = props => (
  <small sx={stylesLabel}>{props.children}</small>
);

Label.displayName = 'Price.Label';
