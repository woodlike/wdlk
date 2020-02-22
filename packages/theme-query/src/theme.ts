import {
  borderWidths,
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  letterSpacings,
  spaces,
  timing,
  duration,
} from './tokens';

export const theme = {
  borderWidths,
  colors,
  fonts: {
    ...fontFamily,
  },
  fontSizes,
  fontWeights,
  letterSpacings,
  spaces,
  transition: {
    duration,
    timing,
  },
};
export default theme;
