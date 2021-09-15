import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo-header.svg';
import { ReactComponent as Profile } from '../images/Profile.svg';
import { ReactComponent as Cart } from '../images/Cart.svg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <div>
          <Link to="/shop" className="links">
            Discover
          </Link>
        </div>
        <div>About</div>
        <div>Contact Us</div>
      </nav>
      <div className="profile-section">
        <Profile className="profile-section-icon" />
        <Cart className="profile-section-icon" />
      </div>
    </header>
  );
};

export default Header;
