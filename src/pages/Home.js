import React from 'react';
import Hero from '../components/Hero';
import NewProduct from '../components/NewProduct';
import Products from '../components/Products';
import { pizzaOffer, desertOffer } from '../data';

function Home() {
  return (
    <>
      <Hero />
      <Products heading='Today"s Pizza Offer' data={pizzaOffer} />
      <NewProduct />
      <Products heading='Today"s Desert Offer' data={desertOffer} />
    </>
  );
}

export default Home;
