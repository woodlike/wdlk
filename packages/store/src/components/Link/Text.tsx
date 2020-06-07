/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { LinkProps } from '.';

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

const createTextStyles = (size: number, inverted = false): SxStyleProp => ({
  ...stylesText,
  fontFamily: 'body',
  fontSize: size,
  color: inverted ? 'textInverted' : 'text',
});

export const LinkText: React.FC<LinkTextProps> = (props): JSX.Element => {
  const Component = props.as || 'a';
  return (
    <Component
      sx={createTextStyles(props.size, props.inverted)}
      href={props.href}
      onClick={props.onClick}>
      {props.children}
    </Component>
  );
};

LinkText.displayName = 'Link.Text';
