import * as React from 'react';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { readFile } from 'fs';
import { resolve } from 'path';

import ProductsPage from '../pages/products';

describe('useNavigationData()', () => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        author: 'Florian',
        description: 'My description',
        title: 'My Title',
      },
    },
  }));

  it('should return a navigation object query', async () => {
  const { container } = render(<ProductsPage />);
  console.log(container)
  //   readFile(resolve('./', 'src/data/navigation.json'), 'utf-8', (_, data) => {
  //     console.log(useNavigationData())
  //     done()
  //   });
  })

})
