import { useSelector } from "react-redux";
import Card from "../../../common/components/Card";
import { IOrder} from "../../register/types/product";
import "./css/historical.css";

const HistoricalDetall = () => {
  const Orders = useSelector((store:any) => store.product.product);
  return (
    <div className={"cards"}>
      {!!Orders.orders&&Orders?.orders.map((e:IOrder)=>(
        <Card data={e}/>
      ))}
    </div>
  );
};

export default HistoricalDetall;
