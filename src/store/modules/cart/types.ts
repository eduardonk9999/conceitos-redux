export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface IcartItem {
  product: IProduct;
  quantity: number;
}

export interface IcartState {
  items: IcartItem[];
}
