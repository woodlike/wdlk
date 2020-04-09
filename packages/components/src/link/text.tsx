/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { useThemeQuery } from '../theme/query';
import { LinkProps, LinkSize, handleLinkSize } from '.';

export interface LinkTextProps extends LinkProps {
  readonly inverted?: boolean;
}

const stylesText: SxStyleProp = {
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
};

const createStylesText = (size: LinkSize, inverted = false, qt: ThemeQuery): SxStyleProp => ({
  ...stylesText,
  fontFamily: qt('body'),
  fontSize: handleLinkSize(size, qt),
  color: inverted ? qt('textInverted') : qt('text'),
});

export const Text: React.FC<LinkTextProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const styles = createStylesText(props.size, props.inverted, qt);

  return props.as === 'a' ? (
    <props.as sx={styles} href={props.href}>
      {props.children}
    </props.as>
  ) : (
    <props.as sx={styles} onClick={props.onClick}>
      {props.children}
    </props.as>
  );
};

Text.displayName = 'Link.Text';
