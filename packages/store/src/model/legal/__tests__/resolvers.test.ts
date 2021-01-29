import { Dictionary } from 'ramda';
import { ShopifyPage } from '../..';
import { filterPageByTitle } from '../../utils';
import { legalIds } from '..';
import { shopifyPages } from '../../../../__mocks__';

type FilterOnceApplied<A> = <K extends A[] | Dictionary<A>>(
  source: K,
) => K extends Array<infer U>
  ? U[]
  : K extends Dictionary<infer U>
  ? Dictionary<U>
  : never;

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
    legalPageResult = undefined as unknown as LegalPageResult;
  })

  describe('filterPageLegalPages', () => {
    let filterPageLegalPages: FilterOnceApplied<LegalPageResult>;

    beforeEach(() => {
      filterPageLegalPages = filterPageByTitle(legalIds);
    });

    afterEach(() => {
      filterPageLegalPages = (undefined as unknown) as FilterOnceApplied<
        LegalPageResult
      >;
    });

    it('should return a filterd list of lega page nodes', () => {
      expect(filterPageLegalPages(shopifyPages.nodes)).toStrictEqual(legalPageResult)
    });
  });
});
