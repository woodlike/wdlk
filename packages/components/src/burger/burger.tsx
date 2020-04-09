/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../theme/query';

export interface BurgerProps {
  isExpanded: boolean;
  readonly onClick: React.MouseEventHandler<HTMLElement>;
}

const burgerLineHeight = 2;

const stylesBurger: SxStyleProp = {
  position: 'relative',
  display: 'inline-block',
  width: `${qt('spaces')(5)}px`,
  padding: `${qt('spaces')(3)}px 0`,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
};

const stylesPseudoElements: SxStyleProp = {
  content: '""',
  position: 'absolute',
  left: 0,
  width: 'inherit',
  height: 'inherit',
  backgroundColor: 'currentColor',
  transform: 'rotate3d(0, 0, 1, 0)',
  transition: 'top .3s .6s ease, transform .3s ease',
};

const stylesBurgerLayers: SxStyleProp = {
  position: 'absolute',
  left: 0,
  width: 'inherit',
  height: `${burgerLineHeight}px`,
  color: qt('grays')(5),
  backgroundColor: 'currentColor',
  '::before': {
    ...stylesPseudoElements,
    top: `${-burgerLineHeight * 4}px`,
  },
  '::after': {
    ...stylesPseudoElements,
    top: `${burgerLineHeight * 4}px`,
  },
};

const stylesPseudoElementsExpanded: SxStyleProp = {
  top: 0,
  transition: 'top .3s ease, transform .3s .5s ease',
};

const createStylesExpandedLines = (isExpanded: boolean): SxStyleProp => ({
  ...(isExpanded
    ? {
        backgroundColor: 'transparent',
        '::before': {
          ...stylesPseudoElements,
          ...stylesPseudoElementsExpanded,
          transform: 'rotate3d(0, 0, 1, 45deg)',
        },
        '::after': {
          ...stylesPseudoElements,
          ...stylesPseudoElementsExpanded,
          transform: 'rotate3d(0, 0, 1, -45deg)',
        },
      }
    : { backgroundColor: 'currentColor' }),
});

const createStylesBurgerLayer = (isExpanded: boolean): SxStyleProp => ({
  ...stylesBurgerLayers,
  ...createStylesExpandedLines(isExpanded),
});

export const Burger: React.FC<BurgerProps> = props => (
  <button sx={stylesBurger} onClick={props.onClick} aria-expanded={props.isExpanded} role="button">
    <span sx={createStylesBurgerLayer(props.isExpanded)} />
  </button>
);

Burger.displayName = 'Burger';
