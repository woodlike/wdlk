import {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  spaces,
  timing,
  duration,
} from './tokens';

export const theme = {
  colors,
  fonts: {
    ...fontFamily,
  },
  fontSizes,
  fontWeights,
  spaces,
  transition: {
    duration,
    timing
  }
};
export default theme;
