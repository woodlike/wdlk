import { createSpaceBox } from '..';
import * as Space from '../space';
import { theme } from '../../theme';

describe('Padding Space Area', () => {
  const { space } = theme;
  describe('(shorthand): apply the same space value to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Space.create(0, space)).toEqual([space[0], space[0], space[0], space[0]]);
      expect(Space.create(8, space)).toEqual([space[8], space[8], space[8], space[8]]);
    });

    it('should return a padding area with the provided shorthand number', () => {
      expect(Space.create(24, undefined)).toEqual([24, 24, 24, 24]);
      expect(Space.create(120, undefined)).toEqual([120, 120, 120, 120]);
    });
  });

  describe('(vertical | horizontal): apply values to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Space.create([3, 8], space)).toEqual([space[3], space[8], space[3], space[8]]);
      expect(Space.create([5, 6], space)).toEqual([space[5], space[6], space[5], space[6]]);
    });

    it('should return a padding area with the provided shorthand number', () => {
      expect(Space.create([5, 15], undefined)).toEqual([5, 15, 5, 15]);
      expect(Space.create([24, 12], undefined)).toEqual([24, 12, 24, 12]);
    });
  });

  describe('(top | horizontal | bottom): apply values to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Space.create([3, 0, 9], space)).toEqual([space[3], space[0], space[9], space[0]]);
      expect(Space.create([2, 5, 6], space)).toEqual([space[2], space[5], space[6], space[5]]);
    });

    it('should return a padding area with the provided shorthand number', () => {
      expect(Space.create([100, 20, 200], undefined)).toEqual([100, 20, 200, 20]);
      expect(Space.create([24, 12, 38], undefined)).toEqual([24, 12, 38, 12]);
    });
  });

  describe('(top | right | bottom | left): apply values to the four padding sides', () => {
    it('should return a padding area with the 4th Theme-UI space scale', () => {
      expect(Space.create([0, 1, 2, 3], space)).toEqual([space[0], space[1], space[2], space[3]]);
      expect(Space.create([2, 9, 5, 6], space)).toEqual([space[2], space[9], space[5], space[6]]);
    });

    it('should return a padding area with the provided shorthand number', () => {
      expect(Space.create([100, 20, 200, 20], undefined)).toEqual([100, 20, 200, 20]);
      expect(Space.create([24, 12, 38, 46], undefined)).toEqual([24, 12, 38, 46]);
    });
  });
});

describe('createBoxSpaces', () => {
  describe('createBoxSpaces(): padding', () => {
    it('should return a 4 item array (SpaceBox) containing the "p" value', () => {
      expect(
        createSpaceBox({
          p: 10,
        }),
      ).toEqual([10, 10, 10, 10]);
    });
    it('should return a 4 item array (SpaceBox) containing the same array input', () => {
      expect(
        createSpaceBox({
          p: [5, 25, 50, 75],
        }),
      ).toEqual([5, 25, 50, 75]);
    });
    it('should return a 4 item array (SpaceBox) containing the "px" (SpaceTuple) value', () => {
      expect(
        createSpaceBox({
          px: [10, 20],
        }),
      ).toEqual([0, 10, 0, 20]);
    });
    it('should return a 4 item array (SpaceBox) containing the "py" (SpaceTuple) value', () => {
      expect(
        createSpaceBox({
          py: [10, 20],
        }),
      ).toEqual([10, 0, 20, 0]);
    });

    it('should return a 4 item array (SpaceBox) containing the "py" and "px" (SpaceTuple) values', () => {
      expect(
        createSpaceBox({
          p: [20, 20, 20, 20],
          py: [30, 50],
          px: [2, 9],
        }),
      ).toEqual([30, 2, 50, 9]);
      expect(
        createSpaceBox({
          py: [30, 50],
          px: [2, 9],
        }),
      ).toEqual([30, 2, 50, 9]);
    });

    describe('createBoxSpaces(): padding overrides', () => {
      it('should return a 4 item array (SpaceBox) where "px" (SpaceTuple) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            p: [5, 25, 50, 75],
            px: [8, 10],
          }),
        ).toEqual([5, 8, 50, 10]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (number) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            p: [5, 25, 50, 75],
            px: 6,
          }),
        ).toEqual([5, 6, 50, 6]);
      });
      it('should return a 4 item array (SpaceBox) where "py" (SpaceTuple) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            p: [5, 25, 50, 75],
            py: [16, 7],
          }),
        ).toEqual([16, 25, 7, 75]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (number) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            p: [5, 25, 50, 75],
            py: 6,
          }),
        ).toEqual([6, 25, 6, 75]);
      });
    });
  });
});
