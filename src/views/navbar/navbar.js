import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) { // Adjust this value to the desired scroll position
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <img src='/images/unnamed.webp' alt='' />
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Dictionary</a></li>
                    <li><a href='/'>Library</a></li>
                    <li><a href='/profile'>Profile</a></li>
                    <li><a href='/dashboard'>Dashboard</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/register'>Register</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
