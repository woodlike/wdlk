import { renderHook } from '@testing-library/react-hooks';
import { useStaticQuery } from 'gatsby';

import { useProductData } from '..';
import { productQueryMock } from '../../../__mocks__';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValue(productQueryMock);
});

describe('useProductData()', () => {
  it('should return an object containing the static product data', () => {
    const { result } = renderHook(() => useProductData());
    expect(result.current).toMatchInlineSnapshot(`
      Object {
        "ariaLabels": Object {
          "select": "size-variant-select",
        },
        "cartButton": "Add to bag",
      }
    `);
  });
});
