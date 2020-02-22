import { RGB } from '../tokens';

/*
 * @description: Operation on numbers
 */
export const toRGB = (color: RGB): string => `rgb(${color.join(', ')})`;

/*
 * @description: Operation on strings
 */
export const splitFromDot = (str: string): string[] => str.split(/\./);
