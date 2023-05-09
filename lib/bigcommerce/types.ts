export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = Omit<BigCommerceCart, 'lines'> & {
  lines: CartItem[];
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type Collection = BigCommerceCollection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = Omit<BigCommerceProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SEO = {
  title: string;
  description: string;
};

export type BigCommerceCart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type BigCommerceCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type BigCommerceProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type BigCommerceCartOperation = {
  data: {
    cart: BigCommerceCart;
  };
  variables: {
    cartId: string;
  };
};

export type BigCommerceCreateCartOperation = {
  data: { cartCreate: { cart: BigCommerceCart } };
};

export type BigCommerceAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: BigCommerceCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type BigCommerceRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: BigCommerceCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type BigCommerceUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: BigCommerceCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type BigCommerceCollectionOperation = {
  data: {
    collection: BigCommerceCollection;
  };
  variables: {
    handle: string;
  };
};

export type BigCommerceCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<BigCommerceProduct>;
    };
  };
  variables: {
    handle: string;
  };
};

export type BigCommerceCollectionsOperation = {
  data: {
    collections: Connection<BigCommerceCollection>;
  };
};

export type BigCommerceMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type BigCommercePageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type BigCommercePagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type BigCommerceProductOperation = {
  data: { product: BigCommerceProduct };
  variables: {
    handle: string;
  };
};

export type BigCommerceProductRecommendationsOperation = {
  data: {
    productRecommendations: BigCommerceProduct[];
  };
  variables: {
    productId: string;
  };
};

export type BigCommerceProductsOperation = {
  data: {
    products: Connection<BigCommerceProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};
