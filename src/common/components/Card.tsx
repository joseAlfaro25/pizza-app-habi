import CardModal from "../../module/register/components/CardModal";
import { IOrder } from "../../module/register/types/product";
import "./css/card.css";
import image from "../image/pizza.png";

interface Props {
  data: IOrder;
}

const Card = ({ data }: Props) => {
  return (
    <>
      <div className={"card-box"}>
        <img src={image} alt="Avatar" />
        <div className={"container-especial-card"}>
          <div className={"title-card"}>
            <h4>
              <b>{data.namePizza}</b>
             
            </h4>
          </div>
          <div>
            <div className={"text-total"}> <div style={{fontSize: 15}}><b>{data.name}</b></div>
              {" "}
              <b>Total:</b> {data.price} 
            </div>
          </div>
        </div>
        <CardModal data={data} />
      </div>
    </>
  );
};

export default Card;
