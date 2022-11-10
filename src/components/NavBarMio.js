

// import Container from "react-bootstrap/Container"
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';
import data from "../assets/data";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';



const NavBarMio = () => {
  return (
    <div>
      <img src = {data[0].foto} alt="logo" width={180}/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ItemListContainerCategory">Categorias</Link></li>
        </ul>
        <Link to="/Cart"><CartWidget/></Link>
    </div>
  )
}

export default NavBarMio;


{/* <img src = {data[0].foto} alt="logo" width={180}/> */}

{/* <Link to="/Cart"><CartWidget/></Link> */}