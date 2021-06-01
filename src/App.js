import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMenu from './pages/AddMenu';
import Cart from './components/MenuCart/Cart/Cart';
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route exact path='/menu'>
            <AddMenu />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
