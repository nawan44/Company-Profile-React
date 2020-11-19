import React, { useState } from 'react';
import {
  NavbarToggler, Collapse, NavbarBrand,
  Nav, Navbar, NavItem, NavLink, NavbarText
} from 'reactstrap';
import './css/navmenu.css';
import Logo from './img/logo.png';


const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Nav">
      <Navbar light expand="md" className="Navbar">
        <NavbarBrand href="/" ><img src={Logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2 bg-white" />
        <Collapse isOpen={isOpen} navbar style={{ color: "white" }}>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink style={{ color: "white" }} href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#work">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="#contact">Contact</NavLink>
            </NavItem>

          </Nav>
          {/* <NavbarText>
            <NavLink style={{ color: "white" }} className="admin-super" href="/admin">Admin</NavLink>
          </NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;