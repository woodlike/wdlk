import * as React from 'react';

import { Navigation } from '../components';
import { useNavigationData } from '../hooks';

const ProductsPage = () => {
  const { items, url } = useNavigationData();
  return (
    <>
      <Navigation url={url} items={items} />
      <h1>Hi Mom</h1>
    </>
  );
};

export default ProductsPage;
