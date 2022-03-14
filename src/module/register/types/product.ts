export interface Iproduct {
    id?: string;
    name: string;
    price: number;
}

export interface IOrder{
    name: string;
    phone: number;
    namePizza: string;
    price: number;
    date: string;
    ingredients:Iproduct[]
  }


  export interface IOrdersValue{
    dateCreated: Date;
    orders:IOrder[];
}