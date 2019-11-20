import { RGB } from '../colors';
export const toRGB = (color: RGB): string => `rgb(${color.join(', ')})`;
