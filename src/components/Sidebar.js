import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Close from '../assets/close.svg';
import { useGlobalContext } from '../context';
function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <Icon>
        <CloseIcon src={Close} onClick={closeSidebar} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizza</SidebarLink>
        <SidebarLink to='/'>Deserts</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  right: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-500px')};
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  outline: none;
`;
const CloseIcon = styled.img`
  width: 20px;
  background: transparent;
`;
const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--p-fontSize);
  text-decoration: none;
  list-style: none;
  transition: all 0.3s ease-in-out;
  color: var(--black-color);
  &:hover {
    color: #e31837;
  }
`;
const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: var(--white-color);
  font-size: var(--p-fontSize);
  padding: 16px 64px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:hover {
    background: var(--white-color);
    color: #106060;
  }
`;

export default Sidebar;
