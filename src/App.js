import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import AddMenu from './pages/AddMenu';
import CartItems from './components/MenuCart/Cart/CartItems';
// import { commerce } from './lib/commerce';
import { useGlobalContext } from './context';
function App() {
  const { cart } = useGlobalContext();
  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/menu'>
          <AddMenu />
        </Route>
        <Route path='/cartitems'>
          <CartItems cart={cart} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
