import React from 'react';
import { ReactComponent as Logo } from '../images/logo-header.svg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <div>Discovery</div>
        <div>About</div>
        <div>Contact Us</div>
      </nav>
    </header>
  );
};

export default Header;
