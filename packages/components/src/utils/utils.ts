import { qt } from '../theme/query';

export function calcYPosition(scales: string[], fontS: number, fontM: number): string[] {
  const values = scales.map((scale: string) =>
    scale.split(' ').reduce((acc, curr) => {
      const char = curr.match(/[0-9]/g);
      return char ? (acc = parseInt(char.join(''))) : acc;
    }, 0),
  );
  return values.map(val => (val <= Math.max(...values) ? `${val - fontS * 1.5 - 3}px` : `${val - fontM * 1.5 + 2}px`));
}

const fontSizeS = (qt('fontSizes')(2) as unknown) as number;
const fontSizeM = (qt('fontSizes')(3) as unknown) as number;
export const headerScales = (qt('header')('all') as unknown) as string[];
export const headerYPosition = calcYPosition(headerScales, fontSizeS, fontSizeM);

export function isEmptyObj<T>(obj: T): boolean {
  for (const prop in obj) {
    if ((obj as {}).hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}
