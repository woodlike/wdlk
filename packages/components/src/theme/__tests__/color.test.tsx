import { theme } from '..';
import * as Color from '../color';

describe('Color scale area', () => {
  const { colors } = theme;
  it('should return a Theme-UI color value', () => {
    expect(Color.query('primary', colors)).toEqual(colors.primary);
    expect(Color.query('secondary', colors)).toEqual(colors.secondary);
    expect(Color.query('muted', colors)).toEqual(colors.muted);
    expect(Color.query('text', colors)).toEqual(colors.text);
  });
  describe('Scaled Theme-UI colors', () => {
    it('should return the first color value from array on missing argument', () => {
      expect(Color.query('corals', colors)).toEqual(colors.corals[0]);
      expect(Color.query('blacks', colors)).toEqual(colors.blacks[0]);
    });
    it('should return the scaled color value from the array index', () => {
      expect(Color.query('whites', colors, 3)).toEqual(colors.whites[3]);
      expect(Color.query('corals', colors, 1)).toEqual(colors.corals[1]);
    });
  });
});
