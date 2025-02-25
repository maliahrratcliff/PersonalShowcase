import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            Bit-O-Rae <i class="fa-solid fa-bug"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Coding Challenges' className='nav-links' onClick={closeMobileMenu}>
                Coding Challenges
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Bit-O-Blog' className='nav-links' onClick={closeMobileMenu}>
                Bit-O-Blog
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
            </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar
