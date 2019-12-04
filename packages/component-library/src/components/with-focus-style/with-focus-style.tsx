/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../query';
import { MappedWithFocus } from './types';

const styledFocus: SxStyleProp = {
  outlineOffset: `${qt('borderWidths')(1)}px`,
  outlineStyle: 'solid',
  outlineWidth: `${qt('borderWidths')(1)}px`,
  outlineColor: qt('grays')(4),
};

const styledBase: SxStyleProp = {
  ':focus': {
    outline: `${styledFocus}`,
  },
};

function isFocused<T>(
  props: Pick<MappedWithFocus<T>, 'isFocused'>
): SxStyleProp {
  return props.isFocused ? styledFocus : {};
}

function themedWithFocusStyles<T>(
  props: Pick<MappedWithFocus<T>, 'isFocused'>
): SxStyleProp {
  const outline = Object.assign({}, isFocused(props));
  return {
    ...styledBase,
    ...outline,
  };
}

export function withFocusStyle<T>(
  Component: React.FunctionComponent
): (props: MappedWithFocus<T>) => JSX.Element {
  const WithFocusStyle = (props: MappedWithFocus<T>): JSX.Element => {
    return <Component sx={themedWithFocusStyles(props)} {...props} />;
  };
  WithFocusStyle.displayName = `WithFocusStyle(${Component.displayName ||
    Component.name})`;
  return WithFocusStyle;
}
