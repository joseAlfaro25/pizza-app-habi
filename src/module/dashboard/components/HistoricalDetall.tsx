import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../../common/components/Card";
import { IOrder } from "../../register/types/product";
import "./css/historical.css";
import image from "../../../common/image/data.png";

const HistoricalDetall = () => {
  const Orders = useSelector((store: any) => store.product.product);
  const [searchedAchar, setSearcheAchar] = useState<string>("");
  const [rows, setRows] = useState<IOrder[]>(Orders.orders);
  const requestSearch = (
    searchedVal: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = searchedVal.target;
    setSearcheAchar(value);
    const filteredRows =
      !!Orders.orders &&
      Orders?.orders.filter((row: IOrder) => {
        return row.name.toLowerCase().includes(value.toLowerCase());
      });
    setRows(filteredRows);
  };
  console.log("TEST", rows);
  return (
    <div>
      <div className={"search"}>
        <input
          type="text"
          placeholder={"Busca cliente por nombre"}
          value={searchedAchar}
          onChange={requestSearch}
        />
      </div>
      {(!!rows && rows.length && (
        <div className={"cards"}>
          {!!rows && rows.map((e: IOrder) => <Card data={e} />)}
        </div>
      )) || (
        <div className={'div-void'}>
          <img src={image} alt="void" className={'image-void'} />
          <h3> Información vacia</h3>
        </div>
      )}
    </div>
  );
};

export default HistoricalDetall;
