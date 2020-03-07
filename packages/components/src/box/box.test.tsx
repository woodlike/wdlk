import { reduceBoxSpaces } from '.';

describe('<box />', () => {
  describe('createBoxSpaces', () => {
    it('should return an a 4 item array containing the same value', () => {
      expect(
        reduceBoxSpaces({
          tag: 'div',
          p: 10,
        }),
      ).toEqual([10, 10, 10, 10]);
    });
  });
});
