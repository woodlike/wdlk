/**@jsx jsx */
import { jsx, SxStyleProp, useThemeUI, Theme } from 'theme-ui';
import { qt } from '../query';

export interface LinkTextProps {
  readonly as: LinkType;
  readonly size: LinkSize;
  readonly family?: string;
  readonly href?: string;
  readonly onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export type LinkType = 'a' | 'span';
export type LinkSize = 's' | 'm' | 'l' | 'xl';

const styles: SxStyleProp = {
  lineHeight: 1.2,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
};

const handleLinkSize = (size: LinkSize, theme: Theme): number | string => {
  switch (size) {
    case 's':
      return theme ? 1 : qt('fontSizes')(1);
    case 'm':
      return theme ? 2 : qt('fontSizes')(2);
    case 'l':
      return theme ? 3 : qt('fontSizes')(3);
    case 'xl':
      return theme ? 4 : qt('fontSizes')(4);
  }
};

const createStylesSize = (size: LinkSize, theme: Theme): SxStyleProp => ({
  fontSize: handleLinkSize(size, theme),
});

const createStylesFamily = (family = qt('body') as string): SxStyleProp => ({
  fontFamily: family,
});

const createStyles = (family: string, size: LinkSize, theme: Theme): SxStyleProp => ({
  ...styles,
  ...createStylesFamily(family),
  ...createStylesSize(size, theme),
});

export const Text: React.FC<LinkTextProps> = (props): JSX.Element => {
  const { theme } = useThemeUI();
  const styles = createStyles(props.family, props.size, theme);
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
