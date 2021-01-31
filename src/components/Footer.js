import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          A Swamphacks Production
        </p>
        <Link to='/' className='social-logo'>
              CHATTER &nbsp; <i class="fas fa-mug-hot"></i>
        </Link>
      </section>
    </div>
  );
}

export default Footer;
