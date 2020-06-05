import * as React from 'react';

import { Footer, Header } from '../components';

const ProductsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Footer.Layout iconBar={<Footer.IconBar />} />
    </>
  );
};

export default ProductsPage;
