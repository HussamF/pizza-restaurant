import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import { pizzaOffer, desertOffer } from './data';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Today"s Pizza Offer' data={pizzaOffer} />
        <NewProduct />
        <Products heading='Today"s Desert Offer' data={desertOffer} />
      </Router>
    </>
  );
}

export default App;
