import React from 'react';
import { ReactComponent as HeroSvg } from '../images/hero-title.svg';

const Hero = () => {
  return (
    <hero className="outer-container">
      <div className="inner-container">
        <HeroSvg className="hero-svg" />
        <div className="inner-container-text">
          <h1>The nature candle</h1>
          <p>
            All handmade natural sox wax candles. Candleleaf is a companion for
            all your pleasure moments
          </p>
        </div>
        <div className="btn-primary">Discover our collection</div>
      </div>
    </hero>
  );
};

export default Hero;
