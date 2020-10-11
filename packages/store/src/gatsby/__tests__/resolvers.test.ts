import { GatsbyCtx, getNodeModelByRemoteId, ProductFeatures } from '..';
import {
  graphcmsFabric,
  graphcmsMarineProtection,
  graphcmsProducts,
} from '../../../__mocks__';

describe('Gatsby Resolvers', () => {
  const context = {} as GatsbyCtx<ProductFeatures>;

  beforeEach(() => {
    Object.defineProperty(context, 'nodeModel', {
      writable: true,
      value: {
        getAllNodes: jest.fn(({ type }) => {
          if (type === 'GraphCMS_Product') {
            return graphcmsProducts;
          }

          if (type === 'GraphCMS_FabricFeature') {
            return graphcmsFabric;
          }

          if (type === 'GraphCMS_ProductMarineProtection') {
            return graphcmsMarineProtection;
          }
        }),
      },
    });
  });

  describe('getNodeModelByRemoteId', () => {
    it('should return null when a nodeModel can not been found', () => {
      expect(
        getNodeModelByRemoteId('GraphCMS_FabricFeature', 'randomId', context),
      ).toBeNull();
      expect(
        getNodeModelByRemoteId(
          'GraphCMS_ProductMarineProtection',
          'randomId',
          context,
        ),
      ).toBeNull();
    });

    it('should return a matching GraphCMS_FabricFeature', () => {
      const id = graphcmsProducts[0].fabricFeature.remoteId;
      expect(
        getNodeModelByRemoteId('GraphCMS_FabricFeature', id, context),
      ).toEqual(graphcmsFabric[0]);
    });

    it('should return a matching GraphCMS_ProductMarineProtection', () => {
      const id = graphcmsProducts[0].productMarineProtection.remoteId;
      expect(
        getNodeModelByRemoteId('GraphCMS_ProductMarineProtection', id, context),
      ).toEqual(graphcmsMarineProtection[0]);
    });
  });
});
