import React from 'react';
import '../Style/Footer.css';
import logot from '../images/logot.png'

const Footer = () => {
  return (
    <>
      <section>
        <div className="footer-container">
          <section>
            <div className="footer-content">
              <div className="logo-and-title">
                <img src={logot} alt="Logo" className="footer-logo" />
                <h1>Evoulation</h1>
              </div>
              <div>
                <p>Your Trusted Partner in Electric Vehicles</p>
                <p>&copy; 2025 Evoulation. All Rights Reserved.</p>
              </div>
              <div className="footer-links">
                  <div className="social-icons">
                  <p>Contact us: support@evoulation.com</p>
                  <p>Follow us on social media:</p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook">Facebook</i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram">Instagram</i>
                    </a>
                  </div>
                </div>
            </div>
            
           
          </section>
        </div>
      </section>
    </>
  );
};

export default Footer;
