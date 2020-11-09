import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import './css/navmenu.css';

const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navmen" >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="logo">Company</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Menu 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Menu 2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu 3
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Submenu 3 - 1
                </DropdownItem>
                <DropdownItem>
                  Submenu 3 - 2
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="#">Menu 4</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Add  Menu</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;
