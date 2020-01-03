import { renderHook } from '@testing-library/react-hooks';
import { useStaticQuery } from 'gatsby';

import {useNavigationData} from '..';
import { navigationQueryMock } from '../../../__mocks__';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValue(navigationQueryMock);
});

describe('useNavigationData()', () => {
  it('should return an object containing the navigation data', () => {
    const { result } = renderHook(() => useNavigationData());
    expect(result.current).toMatchSnapshot();
  });
});
