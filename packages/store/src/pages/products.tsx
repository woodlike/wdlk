import * as React from 'react';

import { Footer, Header } from '../components';

const ProductsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Footer.Layout>
        <Footer.Menu />
        <Footer.IconBar />
      </Footer.Layout>
    </>
  );
};

export default ProductsPage;
