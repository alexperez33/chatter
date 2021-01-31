import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CHATTER  &nbsp; <i class="fas fa-mug-hot"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/searches'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/record'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Record
              </Link>
            </li>

            <li>
              <Link
                to='/profile'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                PROFILE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>PROFILE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
