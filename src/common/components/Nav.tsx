import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/nav.css";

const Nav = () => {
  const Active = useSelector((store: any) => store.active.active);
  return (
    <>
      {(Active === false && (
        <nav>
          <li>
            <Link to={"/"}><b>Fast pizza</b></Link>
          </li>
          <ul>
            <li>
              <Link to={"/Register"}><b>Registrar</b></Link>
            </li>
            <li>
              <Link to={"/Dashboard"}><b>Dashboard</b></Link>
            </li>
          </ul>
        </nav>
      )) ||
        null}
    </>
  );
};

export default Nav;
