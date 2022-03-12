import React from "react";
import { IOrder } from "../Main";

interface Props {
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  order: IOrder;
}

const useProduct = ({ setOrder, order }: Props) => {
  const handleChange = (event: any) => {
    const listSelectd = [...order.ingredients];
    if (event.target.checked) {
      listSelectd.push({
        id: event.target.id,
        name: event.target.name,
        price: event.target.value,
      });

      const total = listSelectd.map((price: any) => parseInt(price.price));
      const totalEnd = total.reduce((acc, va) => acc + va, 10000);
      setOrder({ ...order, ingredients: listSelectd, price: totalEnd });
    } else {
      for (let i = 0; i < listSelectd.length; i++) {
        if (listSelectd[i].id === event.target.id) {
          listSelectd.splice(i, 1);
          const total = listSelectd.map((price: any) => parseInt(price.price));
          const totalEnd = total.reduce((acc, va) => acc + va, 10000);
          setOrder({ ...order, ingredients: listSelectd, price: totalEnd });
        }
      }
    }
  };
  console.log("listSelectd", order);

  return { handleChange };
};

export default useProduct;
