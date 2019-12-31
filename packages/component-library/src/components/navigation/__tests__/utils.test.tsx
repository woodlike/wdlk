import { calcYPosition } from '../utils';
import { qt } from '../../../query';

describe('calcYPosition()', () => {
  it('should return an array containing the px values in relation to the main navigation link', () => {
    const headerScales = (qt('header')('all') as unknown) as string[];
    const fontSizeS = (qt('fontSizes')(2) as unknown) as number;
    const fontSizeM = (qt('fontSizes')(3) as unknown) as number;
    expect(calcYPosition(headerScales, fontSizeS, fontSizeM)).toStrictEqual([
      '44px',
      '44px',
      '44px',
      '54px',
    ]);
    expect(
      calcYPosition(['100px', '200px', '300px'], fontSizeS, fontSizeM)
    ).toStrictEqual(['74px', '174px', '274px']);
  });
});