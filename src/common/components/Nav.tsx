
import { Link } from 'react-router-dom';
import './css/nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
         <Link to={'/'} >Home</Link>
        </li>
        <li>
        <Link to={'/Dashboard'} >Link</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
