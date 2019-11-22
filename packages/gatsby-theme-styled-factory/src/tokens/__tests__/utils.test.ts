import {color} from '../colors';
import { toRGBString } from '../utils';
describe('Token Utils', () => {
  describe('toRGBString()', () => {
    it('should convert an RGB array into an rgb string', () => {
      expect(toRGBString(color.coral)).toMatch('255, 113, 99');
      expect(toRGBString(color.coralActive)).toMatch('229, 85, 78');
      expect(toRGBString(color.white)).toMatch('255, 255, 255');
    });
  });
});
