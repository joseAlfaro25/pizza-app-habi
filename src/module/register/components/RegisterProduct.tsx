import "./css/product.css";
import { Ingredients } from "../data/Ingredientes";
import { ChangeEvent } from "react";

interface Iproduct {
  name: string;
  price: number;
}
interface IProps{
  onChange:any;
}
const RegisterProduct = ({onChange}:IProps) => {
  return (
    <>
      <table className={"customers"}>
        <tr>
          <th>Ingrediente</th>
          <th>Precio</th>
          <th>Elegir</th>
        </tr>
          {Ingredients?.map((e: Iproduct, i: number) => (
        <tr>
            
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td><input name={e.name} value={e.price} id={i.toString()} type="checkbox" onChange={(event) =>onChange(event.target)}/></td>
            
        </tr>
          ))}
      </table>
    </>
  );
};

export default RegisterProduct;
