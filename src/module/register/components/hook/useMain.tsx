import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../../config/store/product";
import { IOrder, IOrdersValue } from "../../types/product";

const useMain = () => {
  const dispatchReducer = useDispatch();
  const [order, setOrder] = useState<IOrder>({
    name: "",
    phone: 0,
    namePizza: "",
    price: 0,
    date: "",
    ingredients: [],
  });
  const [orders, setOrders] = useState<IOrdersValue>({
    dateCreated: new Date(),
    orders: [],
  });

  const isValidField = () => {
    if (
      order.name === "" ||
      order.phone === 0 ||
      "" ||
      order.namePizza === "" ||
      order.price === 0 ||
      "" ||
      order.date === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const isValidData = () => {
    if (isValidField()) {
      const listIngredient = [...orders.orders];
      listIngredient.push(order);
      setOrders({ ...orders, orders: listIngredient });
      return true;
    } else {
      console.log("FALTAN CAMPOS");
      return false;
    }
  };

  const handleSubmit = () => {
    if (orders.orders.length > 0) {
      dispatchReducer(saveProduct(orders));
    } else {
      console.log("FALTAN CAMPOS OBLIGATORIOS");
    }
  };

  return {
    order,
    setOrder,
    handleSubmit,
    submitInfo: isValidData,
  };
};

export default useMain;
