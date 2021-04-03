import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar(props) {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const clodeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={clodeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
            LAVISH
         </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink to="/" className="nav-links" onClick={clodeMobileMenu}>
                  Home
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-links" onClick={clodeMobileMenu}>
                  Services
              </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/products" className="nav-links" onClick={clodeMobileMenu}>
                  Products
              </NavLink>
              </li> */}

              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link" >
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                )
                  : (
                    <Link to="/sign-up" className="btn-link" onClick={clodeMobileMenu}>
                      <Button buttonStyle="btn--outline"
                        buttonSize='btn--mobile'>
                        SIGN UP
                    </Button>
                    </Link>
                  )

                }
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;