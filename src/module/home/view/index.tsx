import "../components/css/home.css";
import image from "../../../common/image/moto.png"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeNav } from "../../../config/store/navbar";
import { useEffect } from "react";
const Home = () => {
  const history =useHistory()
  const router =()=>{
      history.push('/Register')
  }
  
  const dispatchReducer = useDispatch();
  
  useEffect(() => {
    dispatchReducer(activeNav(true));
    return () => {
      dispatchReducer(activeNav(false));
    };
  }, [dispatchReducer]);
  return (
  
    <div className={'home-principal'}>
      <div className={'home-text'}>
        <img src={image} alt={'moto'} height={100}/>
        <h2>Gestor de órdenes</h2>
        <button className={'home-button'} onClick={router}>Iniciar</button>
      </div>
    </div>
  
  );
};

export default Home;
