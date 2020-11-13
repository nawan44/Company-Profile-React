import React, { useState } from 'react';
import {
  NavbarToggler, Collapse,
  NavbarBrand,
  Nav, Navbar,
  NavItem,
  NavLink,
} from 'reactstrap';
import './css/navmenu.css';
import Logo from './img/logo.png';


const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar light expand="md" className="Navbar">
        <NavbarBrand href="/"><img src={Logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar style={{ color: "white" }}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#">Contact</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;