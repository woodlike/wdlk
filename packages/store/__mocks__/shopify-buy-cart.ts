import { Cart } from '../src/model/cart';

export const cartMock: Cart = {
  __typename: 'Checkout',
  id: 'fooo=',
  ready: true,
  requiresShipping: true,
  note: null,
  paymentDue: '135.00',
  paymentDueV2: {
    amount: '135.0',
    currencyCode: 'EUR',
  },
  webUrl:
    'https://wdkl-ocean.myshopify.com/7422733/checkouts/3191b56c34ae73aca2cde2bdf5464daa?key=5664bc38bbe62a21f3e930ba6f9475ec',
  orderStatusUrl: null,
  taxExempt: false,
  taxesIncluded: true,
  currencyCode: 'EUR',
  totalTax: '0.00',
  totalTaxV2: { amount: '0.0', currencyCode: 'EUR' },
  lineItemsSubtotalPrice: { amount: '135.0', currencyCode: 'EUR' },
  subtotalPrice: '135.00',
  subtotalPriceV2: { amount: '135.0', currencyCode: 'EUR' },
  totalPrice: '135.00',
  totalPriceV2: { amount: '135.0', currencyCode: 'EUR' },
  completedAt: null,
  createdAt: '2020-11-15T15:25:35Z',
  updatedAt: '2020-11-20T16:52:59Z',
  email: null,
  discountApplications: [],
  appliedGiftCards: [],
  shippingAddress: null,
  shippingLine: null,
  customAttributes: [],
  order: null,
  lineItems: [
    {
      id: 'foo2==',
      title: 'ALLI One Piece - blue',
      variant: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTM2NjgzNDE5MjQ3Mw==',
        title: 'S/M',
        price: '135.00',
        priceV2: { amount: '135.0', currencyCode: 'EUR' },
        presentmentPrices: [
          {
            price: { amount: '135.0', currencyCode: 'EUR' },
            compareAtPrice: { amount: '165.0', currencyCode: 'EUR' },
            hasNextPage: false,
            hasPreviousPage: false,
            variableValues: {
              id:
                'Z2lkOi8vc2hvcGlmeS9DaGVja291dC8zMTkxYjU2YzM0YWU3M2FjYTJjZGUyYmRmNTQ2NGRhYT9rZXk9NTY2NGJjMzhiYmU2MmEyMWYzZTkzMGJhNmY5NDc1ZWM=',
            },
          },
        ],
        weight: 195,
        available: true,
        sku: 'WDLK202013-2',
        compareAtPrice: '165.00',
        compareAtPriceV2: { amount: '165.0', currencyCode: 'EUR' },
        image: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTM2OTQzNDU5MzY5ODU=',
          src:
            'https://cdn.shopify.com/s/files/1/0742/2733/products/155.jpg?v=1580458979',
          altText: null,
        },
        selectedOptions: [
          {
            name: 'Size',
            value: 'S/M',
          },
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
        },
        product: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MzQ1OTE1ODAyNDk=',
          handle: 'alli-one-piece-blue',
        },
      },
      quantity: 1,
      customAttributes: [
        {
          key: 'slug',
          value: '/products/alli-one-piece-blue',
        },
      ],
      discountAllocations: [],
    },
    {
      id:
        'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzE2OTQxMDIzNjkwODQxMD9jaGVja291dD0zMTkxYjU2YzM0YWU3M2FjYTJjZGUyYmRmNTQ2NGRhYQ==',
      title: 'Sole One Piece Reversible - White Bird / Riad',
      variant: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNjk0MTAyMzY5MDg0MQ==',
        title: 'L',
        price: '135.00',
        priceV2: {
          amount: '135.0',
          currencyCode: 'EUR',
        },
        presentmentPrices: [
          {
            price: { amount: '135.0', currencyCode: 'EUR' },
            compareAtPrice: { amount: '165.0', currencyCode: 'EUR' },

            hasNextPage: false,
            hasPreviousPage: false,
            variableValues: {
              id:
                'Z2lkOi8vc2hvcGlmeS9DaGVja291dC8zMTkxYjU2YzM0YWU3M2FjYTJjZGUyYmRmNTQ2NGRhYT9rZXk9NTY2NGJjMzhiYmU2MmEyMWYzZTkzMGJhNmY5NDc1ZWM=',
            },
          },
        ],
        weight: 0,
        available: true,
        sku: 'WDLK3037',
        compareAtPrice: '165.00',
        compareAtPriceV2: { amount: '165.0', currencyCode: 'EUR' },
        image: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvNDgwNDQxNjI0MTc1Mw==',
          src:
            'https://cdn.shopify.com/s/files/1/0742/2733/products/one_suit_bandeau-weiss-front-2.jpg?v=1544040728',
          altText: null,
        },
        selectedOptions: [
          {
            name: 'Size',
            value: 'L',
          },
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
        },
        product: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE3MDUyMjk5NzU2NDE=',
          handle: 'sole-one-piece-reversible-white-bird',
        },
      },
      quantity: 1,
      customAttributes: [
        {
          key: 'slug',
          value: '/products/sole-one-piece-reversible-white-bird',
        },
      ],
      discountAllocations: [],
    },
    {
      id:
        'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzMxMzY2ODM0MTkyNDczMD9jaGVja291dD0zMTkxYjU2YzM0YWU3M2FjYTJjZGUyYmRmNTQ2NGRhYQ==',
      title: 'ALLI One Piece - blue',
      variant: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTM2NjgzNDE5MjQ3Mw==',
        title: 'S/M',
        price: '135.00',
        priceV2: { amount: '135.0', currencyCode: 'EUR' },
        presentmentPrices: [
          {
            price: { amount: '135.0', currencyCode: 'EUR' },
            compareAtPrice: { amount: '165.0', currencyCode: 'EUR' },
            hasNextPage: false,
            hasPreviousPage: false,
          },
        ],
        weight: 195,
        available: true,
        sku: 'WDLK202013-2',
        compareAtPrice: '165.00',
        compareAtPriceV2: { amount: '165.0', currencyCode: 'EUR' },
        image: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTM2OTQzNDU5MzY5ODU=',
          src:
            'https://cdn.shopify.com/s/files/1/0742/2733/products/155.jpg?v=1580458979',
          altText: null,
        },
        selectedOptions: [{ name: 'Size', value: 'S/M' }],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
        },
        product: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MzQ1OTE1ODAyNDk=',
          handle: 'alli-one-piece-blue',
        },
      },
      quantity: 1,
      customAttributes: [
        { key: 'slug', value: '/products/alli-one-piece-blue' },
      ],
      discountAllocations: [],
    },
  ],
};
