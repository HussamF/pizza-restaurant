import React from 'react';
import styled from 'styled-components';
import ImgBg from '../assets/featured3.jpg';

function NewProduct() {
  return (
    <NewProductContainer>
      <NewProductHeading>New on Menu</NewProductHeading>
      <NewProductDescription>
        Four-Cheese Pizza Asiago, Grana Padano, Parmigiano-Reggiano & Pecorino{' '}
      </NewProductDescription>
      <OrderBtn>Order Now</OrderBtn>
    </NewProductContainer>
  );
}

const NewProductContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  max-height: 500px;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  padding: 0 1rem;
  width: 100vw;
`;

const NewProductHeading = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
`;

const NewProductDescription = styled.p`
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin-bottom: 1rem;
`;

const OrderBtn = styled.button`
  font-size: var(--p-fontSize);
  padding: 0.5rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #ffc500;
  color: var(--white-color);
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #e31837;
  }
`;
export default NewProduct;
