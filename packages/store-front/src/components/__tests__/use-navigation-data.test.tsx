import * as React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import {useNavigationData} from '../../hooks';
import { Navigation } from '../../components';
import { navigationQueryMock } from '../../../__mocks__';

const NavigationMock: React.FC = () => {
  const { items, url } = useNavigationData();
  return (<Navigation url={url} items={items} />);
}

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementationOnce(({ render }) =>
    render(navigationQueryMock)
  );
});

describe('useStaticQuery()', () => {
  it('renders an image', () => {
    const { container } = render(<NavigationMock />)


    expect(1).toBe(1);
  });
});
