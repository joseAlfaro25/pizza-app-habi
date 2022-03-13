
import './css/card.css'

const Card = () => {
  return (
    <>
      <div className={"card"}>
        <img src={"https://www.saborusa.com/wp-content/uploads/2019/12/origen-de-la-pizza-1.jpg.webp"} alt="Avatar"/>
        <div className={"container-especial-card"}>
          <h4>
            <b>Jane Doe</b>
          </h4>
          <p>Interior Designer</p>
        </div>
      </div>
    </>
  );
};

export default Card;
