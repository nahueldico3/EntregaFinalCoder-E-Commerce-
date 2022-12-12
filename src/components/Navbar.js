import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to= '/'>
            <button className='btn home'><i className="fa-solid fa-house-chimney"></i></button>
          </Link>
        </li>
          <Link to="/category/1"> <button className='btn distancia'>Accion</button></Link>
          <Link to="/category/3"> <button className='btn distancia'>Juegos</button></Link>
          <Link to="/category/4"> <button className='btn distancia'>Series</button></Link>
        </ul>
    </div>
        <CartWidget/>
  </div>
</nav>
        </div>
    );
    
}


export default Navbar;