import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our Newsletter
        </p>
        <p className="footer-subscription-text">
          unsubscribe at anytime
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder='Your Email' className="footer-input" />  
            <Button buttonStyle='btn--outline'>Subsribe</Button>
          </form>  
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/'>Home</Link>
            <Link to='/venues'>Venues</Link>
            <Link to='/spotlight'>Spotlight</Link>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Footer