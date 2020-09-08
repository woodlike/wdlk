import { findString } from '..';

describe('findString()', () => {
  let tagsMock: string[];

  beforeEach(() => {
    tagsMock = [
      '4-weeks',
      'body shaping',
      'movement',
      'one piece',
      'shape effect',
      'surf and yoga',
    ];
  });

  afterEach(() => {
    tagsMock = (undefined as unknown) as string[];
  });

  it('should return false if the string is not in the array', () => {
    expect(findString(tagsMock, 'aloha')).toBeFalsy();
    expect(findString(tagsMock, 'ohana')).toBeFalsy();
    expect(findString(tagsMock, 'ānuenue')).toBeFalsy();
  });

  it('should return true on an untrimmed matching value', () => {
    tagsMock.push(' pre-order ');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
  });

  it('should return true on a matching value written in with uppercase letters', () => {
    tagsMock.push('Pre-order');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();

    tagsMock.push('PRE-order');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();

    tagsMock.push('PRE-ORDER');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();
  });

  it('should return true on a matching value written without a hyphen', () => {
    tagsMock.push('Preorder');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();

    tagsMock.push('PreOrder');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();

    tagsMock.push('pre order');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();

    tagsMock.push('Pre order');
    expect(findString(tagsMock, 'pre-order')).toBeTruthy();
    tagsMock.pop();
  });
});
