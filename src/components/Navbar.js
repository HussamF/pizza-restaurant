import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Pizza from '../assets/pizza.svg';
import { useGlobalContext } from '../context';

function Navbar() {
  const { openSidebar } = useGlobalContext();
  return (
    <Nav>
      <NavLink to='/'>Pizza</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars src={Pizza} onClick={openSidebar} />
      </NavIcon>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: var(--p-fontSize);
`;

const NavLink = styled(Link)`
  color: var(--white-color);
  font-size: var(--h-small-fontSize);
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: var(--white-color);
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

const Bars = styled.img`
  transform: translate(-50%, -15%);
  width: 35px;
`;

export default Navbar;
