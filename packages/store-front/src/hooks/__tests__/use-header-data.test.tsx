import { renderHook } from '@testing-library/react-hooks';
import { useStaticQuery } from 'gatsby';

import { useHeaderData } from '..';
import { headerQueryMock } from '../../../__mocks__';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValue(headerQueryMock);
});

describe('useHeaderData()', () => {
  it('should return an object containing the navigation data', () => {
    const { result } = renderHook(() => useHeaderData());
    expect(result.current).toMatchSnapshot();
  });
});
