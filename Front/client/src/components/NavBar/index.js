import React from 'react'
import { Nav, NavbarContainer, NavLogo, PhoneIcon, NavMenu, NavItem, NavLinks   } from './NavBarElements'
import {FaBars} from 'react-icons/fa';


const  Navbar = ({toggle}) =>{
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                OCR
            </NavLogo>
            <PhoneIcon onClick={toggle}>
              <FaBars/>
            </PhoneIcon >
            <NavMenu>
              <NavItem>
                <NavLinks to="Propos">A Propos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Essai">Essai</NavLinks>
              </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar