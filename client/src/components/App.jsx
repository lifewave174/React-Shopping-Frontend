import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductsPage from './products-pages/ProductsPage';
import ProductView from './products-pages/ProductView';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import GlobalState from '../context/candlesContext';
import '../styles/App.scss';

const App = () => {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route exact path="/shop">
              <ProductsPage />
            </Route>
            <Route exact path="/shop/:id">
              <ProductView />
            </Route>
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;
