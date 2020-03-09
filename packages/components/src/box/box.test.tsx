import { createSpaceBox } from '.';

describe('createBoxSpaces', () => {
  describe('createBoxSpaces(): padding', () => {
    it('should return a 4 item array (SpaceBox) containing the "p" value', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            p: 10,
          },
          'p',
        ),
      ).toEqual([10, 10, 10, 10]);
    });
    it('should return a 4 item array (SpaceBox) containing the same array input', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            p: [5, 25, 50, 75],
          },
          'p',
        ),
      ).toEqual([5, 25, 50, 75]);
    });
    it('should return a 4 item array (SpaceBox) containing the "px" (SpaceTuple) value', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            px: [10, 20],
          },
          'p',
        ),
      ).toEqual([0, 10, 0, 20]);
    });
    it('should return a 4 item array (SpaceBox) containing the "py" (SpaceTuple) value', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            py: [10, 20],
          },
          'p',
        ),
      ).toEqual([10, 0, 20, 0]);
    });

    it('should return a 4 item array (SpaceBox) containing the "py" and "px" (SpaceTuple) values', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            p: [20, 20, 20, 20],
            py: [30, 50],
            px: [2, 9],
          },
          'p',
        ),
      ).toEqual([30, 2, 50, 9]);
      expect(
        createSpaceBox(
          {
            tag: 'div',
            py: [30, 50],
            px: [2, 9],
          },
          'p',
        ),
      ).toEqual([30, 2, 50, 9]);
    });

    describe('createBoxSpaces(): padding overrides', () => {
      it('should return a 4 item array (SpaceBox) where "px" (SpaceTuple) overrides the "p" value', () => {
        expect(
          createSpaceBox(
            {
              tag: 'div',
              p: [5, 25, 50, 75],
              px: [8, 10],
            },
            'p',
          ),
        ).toEqual([5, 8, 50, 10]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (number) overrides the "p" value', () => {
        expect(
          createSpaceBox(
            {
              tag: 'div',
              p: [5, 25, 50, 75],
              px: 6,
            },
            'p',
          ),
        ).toEqual([5, 6, 50, 6]);
      });
      it('should return a 4 item array (SpaceBox) where "py" (SpaceTuple) overrides the "p" value', () => {
        expect(
          createSpaceBox(
            {
              tag: 'div',
              p: [5, 25, 50, 75],
              py: [16, 7],
            },
            'p',
          ),
        ).toEqual([16, 25, 7, 75]);
      });
      it('should return a 4 item array (SpaceBox) where "px" (number) overrides the "p" value', () => {
        expect(
          createSpaceBox(
            {
              tag: 'div',
              p: [5, 25, 50, 75],
              py: 6,
            },
            'p',
          ),
        ).toEqual([6, 25, 6, 75]);
      });
    });
  });
  describe('createBoxSpaces(): margin ', () => {
    it('should return a 4 item array (SpaceBox) containing the "m" value', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            m: 10,
          },
          'm',
        ),
      ).toEqual([10, 10, 10, 10]);
    });
    it('should return a 4 item array (SpaceBox) containing the same array input', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            m: [5, 25, 50, 75],
          },
          'm',
        ),
      ).toEqual([5, 25, 50, 75]);
    });
    it('should return a 4 item array (SpaceBox) containing the "mx" (SpaceTuple) value', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            mx: [30, 50],
          },
          'm',
        ),
      ).toEqual([0, 30, 0, 50]);
    });
    it('should return a 4 item array (SpaceBox) containing the "my" (SpaceTuple) value', () => {
      expect(
        createSpaceBox(
          {
            tag: 'div',
            my: [30, 50],
          },
          'm',
        ),
      ).toEqual([30, 0, 50, 0]);
    });
    describe('createBoxSpaces(): margin overrides', () => {
      it('should return a 4 item array (SpaceBox) containing the "my" and "mx" (SpaceTuple) values', () => {
        expect(
          createSpaceBox(
            {
              tag: 'div',
              m: [20, 20, 20, 20],
              my: [30, 50],
              mx: [2, 9],
            },
            'm',
          ),
        ).toEqual([30, 2, 50, 9]);
        expect(
          createSpaceBox(
            {
              tag: 'div',
              my: [30, 50],
              mx: [2, 9],
            },
            'm',
          ),
        ).toEqual([30, 2, 50, 9]);
      });
    });
  });
});
