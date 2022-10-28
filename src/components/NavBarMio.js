

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import foto from "../assets/img/logoPecan.png";
import CartWidget from "./CartWidget";


const NavBarMio = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
        <img src = {foto} alt="logo" width={180}/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Zona de envio</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Frutos secos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Condimentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Congelados</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Ofertas especiales
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarMio;