import { generateIds } from '../generate-id';

describe('generateId', () => {
  it('should return an empty string if the argument is less than one', () => {
    expect(generateIds(0)).toStrictEqual([]);
    expect(generateIds((undefined as unknown) as number)).toStrictEqual([]);
    expect(generateIds((null as unknown) as number)).toStrictEqual([]);
  });

  it('should return two unique ids', () => {
    expect(generateIds(2).length).toBe(2);
    expect(Array.isArray(generateIds(2))).toBeTruthy();
  });

  it('should return ten unique ids', () => {
    expect(generateIds(10).length).toBe(10);
    expect(Array.isArray(generateIds(10))).toBeTruthy();
  });
});
