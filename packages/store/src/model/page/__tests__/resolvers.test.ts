import { ShopifyPage, legalIds } from '..';

import { filterPageByTitle } from '../utils';
import { shopifyPages } from '../../../../__mocks__';

type LegalPageResult = Pick<ShopifyPage, 'slug'| 'title'>;

describe('Page Resolvers', () => {
  let legalPageResult: LegalPageResult[];

  beforeEach(() => {
    legalPageResult = [
      {
        title: 'Standard Business Terms and customer information',
        slug: '/legal/terms-conditions'
      },
      {
        title: 'Data protection declaration',
        slug: '/legal/privacy-policy'
      },
      {
        title: 'Allgemeine Geschäftsbedingungen und Kundeninformationen',
        slug: '/legal/agb'
      },
      {
        title: 'Impressum',
        slug: '/legal/impressum'
      },
      {
        title: 'Datenschutzerklärung',
        slug: '/legal/datenschutzerklarung'
      },
      {
        title: 'Returns & Exchanges',
        slug: '/legal/cancellation-right'
      },
      {
        title: 'About Us - Imprint',
        slug: '/legal/imprint'
      },
      {
        title: 'Widerrufsbelehrung',
        slug: '/legal/widerrufsbelehrung'
      },
    ];
  })

  afterEach(() => {
    legalPageResult = undefined as unknown as LegalPageResult[];
  })

  describe('filterPageLegalPages', () => {

    it('should return a filterd list of lega page nodes', () => {
      const filterLegalPages = filterPageByTitle(legalIds);
      const pages = shopifyPages.nodes as ShopifyPage[]
      expect(filterLegalPages(pages)).toStrictEqual(legalPageResult)
    });
  });
});
