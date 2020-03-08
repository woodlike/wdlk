import { createSpaceBox } from '.';

describe('<box />', () => {
  describe('createBoxSpaces', () => {
    describe('Using the p prop', () => {
      it('should return a 4 item array (SpaceBox) containing the "p" value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            p: 10,
          }),
        ).toEqual([10, 10, 10, 10]);
      });
      it('should return a 4 item array (SpaceBox) containing the same array input', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            p: [5, 25, 50, 75],
          }),
        ).toEqual([5, 25, 50, 75]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (SpaceTuple) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            p: [5, 25, 50, 75],
            px: [8, 10],
          }),
        ).toEqual([5, 8, 50, 10]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (number) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            p: [5, 25, 50, 75],
            px: 6,
          }),
        ).toEqual([5, 6, 50, 6]);
      });
      it('should return a 4 item array (SpaceBox) where "py" (SpaceTuple) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            p: [5, 25, 50, 75],
            py: [16, 7],
          }),
        ).toEqual([16, 25, 7, 75]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (number) overrides the "p" value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            p: [5, 25, 50, 75],
            py: 6,
          }),
        ).toEqual([6, 25, 6, 75]);
      });
    });
    describe('Using the px and mx props', () => {
      it('should return a 4 item array (SpaceBox) containing the "px" (SpaceTuple) value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            px: [10, 20],
          }),
        ).toEqual([0, 10, 0, 20]);
      });
      it('should return a 4 item array (SpaceBox) containing the "mx" (SpaceTuple) value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            mx: [30, 50],
          }),
        ).toEqual([0, 30, 0, 50]);
      });
    });
    describe('Using the py and my props', () => {
      it('should return a 4 item array (SpaceBox) containing the "py" (SpaceTuple) value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            py: [10, 20],
          }),
        ).toEqual([10, 0, 20, 0]);
      });
      it('should return a 4 item array (SpaceBox) containing the "my" (SpaceTuple) value', () => {
        expect(
          createSpaceBox({
            tag: 'div',
            my: [30, 50],
          }),
        ).toEqual([30, 0, 50, 0]);
      });
    });
  });
  describe('Overriding "x" with "x" and "y" values', () => {
    it('should return a 4 item array (SpaceBox) containing the "my" and "mx" (SpaceTuple) values', () => {
      expect(
        createSpaceBox({
          tag: 'div',
          m: [20, 20, 20, 20],
          my: [30, 50],
          mx: [2, 9],
        }),
      ).toEqual([30, 2, 50, 9]);
      expect(
        createSpaceBox({
          tag: 'div',
          my: [30, 50],
          mx: [2, 9],
        }),
      ).toEqual([30, 2, 50, 9]);
    });
    it('should return a 4 item array (SpaceBox) containing the "py" and "px" (SpaceTuple) values', () => {
      expect(
        createSpaceBox({
          tag: 'div',
          p: [20, 20, 20, 20],
          py: [30, 50],
          px: [2, 9],
        }),
      ).toEqual([30, 2, 50, 9]);
      expect(
        createSpaceBox({
          tag: 'div',
          py: [30, 50],
          px: [2, 9],
        }),
      ).toEqual([30, 2, 50, 9]);
    });
  });
});
