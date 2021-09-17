import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeroSvg } from '../images/hero-title.svg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="inner-container">
        <HeroSvg className="hero-svg" />
        <div className="inner-container-text">
          <h1>The nature candle</h1>
          <p>
            All handmade natural sox wax candles. Candleleaf is a companion for
            all your pleasure moments
          </p>
        </div>
        <Link to="/shop">
          <div className="btn-primary">Discover our collection</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
