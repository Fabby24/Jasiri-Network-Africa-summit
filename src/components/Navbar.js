import React from 'react';
import '../styles/Navbar.css';

const Header = () => {
    return (
        <nav className='navbar'>
        <ul className='nav-links'>
            <li><a href='#overview'>Overview</a></li>
            <li><a href='#focus'>Focus Areas</a></li>
            <li><a href='#speakers'>Speakers</a></li>
            <div className='logo'>JASIRI NETWORK</div>
            <li><a href='#tickets'>Tickets</a></li>
            <li><a href='#partner'>Partner</a></li>
            <li><a href='media'>Media</a></li>
        </ul>
        </nav>
    );

};

export default Header;