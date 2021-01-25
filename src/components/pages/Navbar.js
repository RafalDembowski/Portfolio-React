import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <>
         <div className="navbar">
             <div className="navbar-container">
                 <Link to='/' className={ click ? "navbar-logo active" : "navbar-logo"}>
                     Dembowski
                 </Link>
             </div>
             <div className={ click ? "menu-icon active" : "menu-icon"} onClick={handleClick}>
                 {click ? <FaTimes /> : <FaBars />}
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                 <li className="nav-item">
                    <Link to='/' className='nav-links'> 
                        Strona główna
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link to='/AboutMe' className='nav-links'> 
                        O mnie
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link to='/Projects' className='nav-links'> 
                        Projekty
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link to='/Contact' className='nav-links'> 
                        Kontakt
                    </Link>
                 </li>
             </ul>
         </div>
        </>
    )
}

export default Navbar
