
import CardModal from '../../module/register/components/CardModal';
import { IOrder } from '../../module/register/types/product';
import './css/card.css'
import image from '../image/pizza.png';

interface Props {
  data: IOrder
}

const Card = ({data}:Props) => {
  return (
    <>
      <div className={"card-box"}>
        <img src={image} alt="Avatar"/>
        <div className={"container-especial-card"}>
          <h5>
            <b>{data.namePizza} {data.date} <CardModal data={data}/></b> 
          </h5>
          <p>{data.name} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
