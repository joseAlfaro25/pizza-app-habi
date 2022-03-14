import "../components/css/people.css";
import { IOrder } from "../types/product";


interface Props{
  onChangePeople:(value: string, name: string) => void;
  data:IOrder
}

const RegisterPeople = ({onChangePeople,data}:Props) => {
  return (
    <>
      <div className={"form"}>
        <div className={"title"}>
          <h3>Datos personales</h3>
        </div>
        <label>Nombre</label>
        <input type="text" name="name" id="name" value={data.name} onChange={({target})=>onChangePeople(target.value,'name')} placeholder="Nombre" />

        <label>Telefono</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={data.phone}
          onChange={({target})=>onChangePeople(target.value,'phone')}
          placeholder="Telefono"
          required
        />
        <label>Pizza</label>
        <input
          type="text"
          name="namePizza"
          id="namePizza"
          value={data.namePizza}
          onChange={({target})=>onChangePeople(target.value,'namePizza')}
          placeholder="Nombre de pizza"
        />

        <label>Precio</label>
        <input type="number" name="price" id="price"
         value={data.price}
         disabled
         onChange={({target})=>onChangePeople(target.value,'price')}
        placeholder="Precio" />

        <label>Fecha</label>
        <input type="date" name="date" id="date" placeholder="Fecha"
         value={data.date}
         onChange={({target})=>onChangePeople(target.value,'date')}
        />
      </div>
    </>
  );
};

export default RegisterPeople;
