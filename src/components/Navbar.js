import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Pizza from '../assets/pizza.svg';
import { useGlobalContext } from '../context';

function Navbar() {
  const { openSidebar } = useGlobalContext();
  return (
    <Nav>
      <NavIcon onClick={openSidebar}>
        <h1>Menu</h1>
        <Bars src={Pizza} />
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

const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  gap: 0.5rem;
  color: var(--white-color);
  h1 {
    /* transform: translate(-130%, 70%); */
    font-weight: bold;
  }
`;

const Bars = styled.img`
  /* transform: translate(-50%, -15%); */
  width: 35px;
`;

export default Navbar;
