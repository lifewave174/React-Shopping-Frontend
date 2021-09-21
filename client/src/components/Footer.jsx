import React from 'react';
import FooterLogo from '../images/footer.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-border"></div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={FooterLogo} alt="" />
          <p>Your natural candle made for your home and for your wellness</p>
        </div>
        <div className="footer-links">
          <div>
            <h5>Discovery</h5>
            <ul>
              <li>New season</li>
              <li>Most searched</li>
              <li>Most sold</li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li>Help</li>
              <li>Shipping</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div>
            <h5>Info</h5>
            <li>Contact us</li>
            <li>Privacy Policies</li>
            <li>Terms and Conditions</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
