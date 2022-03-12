import "../components/css/people.css";

const RegisterPeople = () => {
  return (
    <div className={"container-custom"}>
      
        <div className={"row"}>
          <label>Nombre</label>
          <input type="text"></input>
        </div>
        <div className={"row"}>
          <label>Apellido</label>
          <input type="text"></input>
        </div>
      
    </div>
  );
};

export default RegisterPeople;
