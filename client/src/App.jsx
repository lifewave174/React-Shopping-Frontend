import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsPage from './components/products-pages/ProductsPage';
import ProductView from './components/products-pages/ProductView';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CandlesProvider from './context/CandlesProvider';
import './styles/App.scss';

const App = () => {
  return (
    <div>
      <CandlesProvider>
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
          <Footer />
        </BrowserRouter>
      </CandlesProvider>
    </div>
  );
};

export default App;
