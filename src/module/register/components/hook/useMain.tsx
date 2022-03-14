import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
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
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Faltan campos obligatorios',
        showConfirmButton: false,
        timer: 1500
      })
      return false;
    }
  };

  const clearState = () => {
    setOrder({
      ...order,
      name: "",
      phone: 0,
      namePizza: "",
      date: "",
      ingredients: []
    })
  }

  const handleSubmit = () => {
    if (orders.orders.length > 0) {
      dispatchReducer(saveProduct(orders));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha guardado correctamente el registro',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Faltan campos obligatorios',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return {
    order,
    setOrder,
    handleSubmit,
    submitInfo: isValidData,
    clearState
  };
};

export default useMain;
