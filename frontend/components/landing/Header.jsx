'use client'

import { useState } from 'react';
import Navbar from './Navbar';
import RightSideDrawer from './RightSideDrawer';

const Header = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-green-600 to-green-800 
        dark:from-dark-200 dark:to-dark-500 text-white py-12"
        >
            <Navbar toggleMenu={toggleMenu} />
            <RightSideDrawer isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            {children}
        </header>
    );
};

export default Header;
