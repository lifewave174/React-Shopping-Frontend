import React from 'react';
import Header from './Header';
import Hero from './Hero';
import GlobalState from '../context/candlesContext';
import '../styles/App.scss';

const App = () => {
  return (
    <div>
      <GlobalState>
        <Header />
        <Hero />
      </GlobalState>
    </div>
  );
};

export default App;
