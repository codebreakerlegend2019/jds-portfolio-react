import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css'

const MenuItems = [
    {
        id:1,
        title: 'Home',
        url:'/',
        className:'nav-links',
        activeClassname:'nav-links-active'
    },
    {
        id:2,
        title: 'About',
        url:'/about',
        className:'nav-links',
        activeClassname:'nav-links-active'
    },
    {
        id:3,
        title: 'Contact',
        url:'/contact',
        className:'nav-links',
        activeClassname:'nav-links-active'
    }
];

function Navbar () {
    const [ clicked, setHamburger ] = useState(false);

    function handleClick(){
        setHamburger(!clicked);
    }

    return (
        <nav className='nav-bar-items'>
            <h1 className='nav-bar-logo'>JDS<i className="fab fa-react"></i></h1>

            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                {MenuItems.map((item)=> {
                    return(
                        <li key={item.id}>
                            <NavLink exact className={item.className} to={item.url}
                            activeClassName= {item.activeClassname}>
                                {item.title}

                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
