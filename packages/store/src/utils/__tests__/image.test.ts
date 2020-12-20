import { addSrcsetDescriptor } from '..';
import { srcsetMock } from '../../../__mocks__';

describe('Image', () => {
  describe('addWidthDescriptor', () => {
    it('should include  the srcset  with descriptors', () => {
      expect(addSrcsetDescriptor(srcsetMock)).toMatchInlineSnapshot(
        `"https://cdn.shopify.com/s/files/1/0742/2733/products/25_500x500.jpg?v=1580468923 500w,https://cdn.shopify.com/s/files/1/0742/2733/products/25_800x800.jpg?v=1580468923 800w,https://cdn.shopify.com/s/files/1/0742/2733/products/25_1024x1024.jpg?v=1580468923 1024w,"`,
      );
    });
  });
});
