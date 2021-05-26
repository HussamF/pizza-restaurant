import React from 'react';
import styled from 'styled-components';

function Products({ heading, data }) {
  return (
    <ProductOfferContainer>
      <ProductOfferHeading>{heading}</ProductOfferHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt}></ProductImg>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
                <OrderBtn>{product.button}</OrderBtn>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductOfferContainer>
  );
}

const ProductOfferContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
`;
const ProductOfferHeading = styled.h1`
  font-size: clamp(3rem, 2.5vw, 4rem);
  text-align: center;
  margin-bottom: 5rem;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 2rem;
`;
const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;
const ProductImg = styled.img`
  min-width: 300px;
  height: 300px;
  max-width: 100%;
  box-shadow: 4px 4px #fdc500;
  border-radius: 5px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const ProductName = styled.p`
  font-weight: 600;
  font-size: var(--p-fontSize);
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 1rem;
`;
const ProductPrice = styled.p`
  font-size: var(--p-fontSize);
  margin-bottom: 1rem;
`;
const OrderBtn = styled.button`
  font-size: var(--p-fontSize);
  padding: 0.5rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #e31837;
  color: var(--white-color);
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #ffc500;
  }
`;

export default Products;
