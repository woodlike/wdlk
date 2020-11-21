import * as Number from './number';
describe('Numbers', () => {
  describe('fixFloatString', () => {
    let float: string;
    beforeEach(() => {
      float = '99.1';
    });

    afterEach(() => {
      float = (undefined as unknown) as string;
    });

    it('should retun a string fixed to the amount passed digits', () => {
      expect(Number.fix(4, float)).toBe('99.1000');
      expect(Number.fix(3, float)).toBe('99.100');
      expect(Number.fix(2, float)).toBe('99.10');
      expect(Number.fix(1, float)).toBe('99.1');
      expect(Number.fix(0, float)).toBe('99');
    });
  });
});
