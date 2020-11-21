export interface CartState {
  readonly client: ShopifyClient;
  readonly cart: Cart;
}

export interface Cart {
  readonly appliedGiftCards: number[];
  readonly completedAt: string | null;
  readonly createdAt: string;
  readonly currencyCode: string;
  readonly customAttributes: number[];
  readonly email: string | null;
  readonly id: string;
  readonly lineItems: LineItem[];
  readonly lineItemsSubtotalPrice: ShopifyPriceV2;
  readonly note: string | null;
  readonly order: null;
  readonly orderStatusUrl: string | null;
  readonly paymentDue: string;
  readonly paymentDueV2: ShopifyPriceV2;
  readonly ready: boolean;
  readonly requiresShipping: boolean;
  readonly shippingAddress: string | null;
  readonly shippingLine: string | null;
  readonly subtotalPrice: string;
  readonly subtotalPriceV2: ShopifyPriceV2;
  readonly taxExempt: boolean;
  readonly taxesIncluded: boolean;
  readonly totalPrice: string;
  readonly totalPriceV2: ShopifyPriceV2;
  readonly totalTax: string;
  readonly totalTaxV2: ShopifyPriceV2;
  readonly updatedAt: string;
  readonly webUrl: string;
  readonly __typename?: string;
}

export interface LineItem {
  readonly customAttributes: ShopifyBuy.CustomAttribute[];
  readonly id: string;
  readonly title: string;
  readonly quantity: number;
  readonly variant: Variant;
}

export interface ShopifyPriceV2 {
  readonly amount: string;
  readonly currencyCode: string;
}

export interface Variant {
  readonly available: boolean;
  readonly compareAtPrice: string;
  readonly compareAtPriceV2: ShopifyPriceV2;
  readonly id: string;
  readonly image: {
    readonly id: string;
    readonly altText?: string | null;
    readonly src: string;
  };
  readonly presentmentPrices: PresentmentPrice[];
  readonly price: string;
  readonly priceV2: ShopifyPriceV2;
  readonly product: Product;
  readonly title: string;
  readonly unitPrice: string | null;
  readonly unitPriceMeasurement: {
    measuredType: string | null;
    quantityUnit: string | null;
    quantityValue: number;
    referenceUnit: string | null;
    referenceValue: number;
  };
  readonly sku: string;
  readonly weight?: number;
}

export interface Product {
  readonly id: string;
  readonly handle: string;
}

export interface PresentmentPrice {
  price: ShopifyPriceV2;
  compareAtPrice: ShopifyPriceV2;

  hasNextPage: boolean;
  hasPreviousPage: boolean;
  variableValues: {
    id: string;
  };
}

export interface ShopifyClient {
  readonly checkout: {
    addLineItems(
      checkoutId: string | number,
      lineItems: ShopifyBuy.LineItemToAdd[],
    ): Promise<Cart>;
    clearLineItems(
      checkoutId: string | number,
      lineItems: LineItem[],
    ): Promise<Cart>;
    create(
      email?: string,
      lineItems?: LineItem[],
      shippingAddress?: ShopifyBuy.Address,
      note?: string,
      customAttributes?: ShopifyBuy.AttributeInput[],
    ): Promise<Cart>;
    fetch(id: string): Promise<Cart>;
    removeLineItems(
      checkoutId: string | number,
      lineItemIds: string[],
    ): Promise<Cart>;
    updateLineItem(
      checkoutId: string | number,
      lineItems: ShopifyBuy.AttributeInput[],
    ): Promise<Cart>;
  };
}

export const initialCart = {
  __typename: 'Checkout',
  id: '',
  ready: false,
  requiresShipping: true,
  note: null,
  paymentDue: '0.00',
  paymentDueV2: {
    amount: '0.00',
    currencyCode: 'EUR',
  },
  webUrl: '',
  orderStatusUrl: null,
  taxExempt: false,
  taxesIncluded: true,
  currencyCode: 'EUR',
  totalTax: '0.00',
  totalTaxV2: { amount: '0.00', currencyCode: 'EUR' },
  lineItemsSubtotalPrice: { amount: '0.00', currencyCode: 'EUR' },
  subtotalPrice: '0.00',
  subtotalPriceV2: { amount: '0.00', currencyCode: 'EUR' },
  totalPrice: '0.00',
  totalPriceV2: { amount: '0.00', currencyCode: 'EUR' },
  completedAt: null,
  createdAt: '',
  updatedAt: '',
  email: null,
  discountApplications: [],
  appliedGiftCards: [],
  shippingAddress: null,
  shippingLine: null,
  customAttributes: [],
  order: null,
  lineItems: [],
};
