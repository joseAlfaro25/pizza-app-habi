import "./css/product.css";
import { Ingredients } from "../data/Ingredientes";
import { Iproduct } from "../types/product";

interface IProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
const RegisterProduct = ({ handleChange }: IProps) => {
  return (
    <>
      <table className={"customers"}>
        <tr>
          <th>Ingredientes</th>
          <th>Precio</th>
          <th>Elegir</th>
        </tr>
        {!!Ingredients&&Ingredients?.map((e: Iproduct, i: number) => (
          <tr key={i}>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <td>
              <input
                name={e.name}
                value={e.price}
                id={i.toString()}
                type="checkbox"
                onChange={handleChange}
              />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default RegisterProduct;
