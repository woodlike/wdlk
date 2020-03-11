/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { useThemeQuery } from '../query';
import { handleLinkSize, LinkProps, LinkSize } from '.';

export interface LinkIconProps {
  readonly size: LinkSize;
}

const stylesHighlight: SxStyleProp = {
  cursor: 'pointer',
};

const createStylesIcon: SxStyleProp = {
  color: 'primary',
  fill: 'currentcolor',
  transition: 'fill 333ms linear',
  cursor: 'pointer',
  ':hover': {
    color: 'secondary',
    fill: 'currentcolor',
  },
};

const createStylesHighlight = (size: LinkSize, qt: ThemeQuery): SxStyleProp => ({
  ...stylesHighlight,
  fontFamily: qt('body'),
  fontSize: handleLinkSize(size, qt),
  color: qt('primary'),
  transition: 'color 333ms linear',
  ':hover': {
    color: qt('secondary'),
  },
});

export const Highlight: React.FC<LinkProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const styles = createStylesHighlight(props.size, qt);
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

Highlight.displayName = 'Link.HighLight';

export const IconRight: React.FC<LinkIconProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  return <ChevronRight size={handleLinkSize(props.size, qt)} sx={createStylesIcon} />;
};
IconRight.displayName = 'Link.IconRight';

export const IconLeft: React.FC<LinkIconProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  return <ChevronLeft size={handleLinkSize(props.size, qt)} sx={createStylesIcon} />;
};
IconLeft.displayName = 'Link.IconLeft';
