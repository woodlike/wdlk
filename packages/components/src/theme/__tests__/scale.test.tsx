import { theme } from '..';
import * as Scale from '../scale';

describe('Padding scale area', () => {
  const { space } = theme;
  describe('(shorthand): apply the same scale value to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Scale.create(0, space)).toEqual([space[0], space[0], space[0], space[0]]);
      expect(Scale.create(8, space)).toEqual([space[8], space[8], space[8], space[8]]);
    });
  });

  describe('(vertical | horizontal): apply scale values to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Scale.create([3, 8], space)).toEqual([space[3], space[8], space[3], space[8]]);
      expect(Scale.create([5, 6], space)).toEqual([space[5], space[6], space[5], space[6]]);
    });
  });

  describe('(top | horizontal | bottom): apply values to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Scale.create([3, 0, 9], space)).toEqual([space[3], space[0], space[9], space[0]]);
      expect(Scale.create([2, 5, 6], space)).toEqual([space[2], space[5], space[6], space[5]]);
    });
  });

  describe('(top | right | bottom | left): apply values to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Scale.create([0, 1, 2, 3], space)).toEqual([space[0], space[1], space[2], space[3]]);
      expect(Scale.create([2, 9, 5, 6], space)).toEqual([space[2], space[9], space[5], space[6]]);
    });
  });
});
