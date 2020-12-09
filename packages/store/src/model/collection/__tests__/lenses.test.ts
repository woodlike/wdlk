import * as Lens from '../lenses';
import { shopifyCollection } from '../../../../__mocks__';

describe('Collection Lenses', () => {
  describe('setCollectionSlug', () => {
    it('should return a valid collection slug', () => {
      expect(
        Lens.setCollectionSlug('collections', shopifyCollection),
      ).toMatchObject(
        expect.objectContaining({
          slug: `/collections/${shopifyCollection.handle}`,
        }),
      );
    });
  });
});
