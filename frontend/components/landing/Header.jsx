'use client'

import { useState } from 'react';

const Header = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
            <div className="sticky top-0.5 bg-gradient-to-r backdrop-blur-lg bg-opacity-60 
                rounded-2xl p-6 z-20 from-green-600 to-green-800 shadow-lg
                container mx-auto flex items-center justify-between max-w-6xl"
            >
                {/* Logo */}
                <div className="text-xl font-bold">
                    <a href="#" className="text-white">UddoktaHut</a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation (Visible on desktop, and toggled on mobile) */}
                <nav className={`lg:flex space-x-6 hidden`}>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-green-300 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Right Side Drawer for Mobile */}
            <div
                className={`fixed top-0 right-0 z-50 w-64 h-full bg-green-800 text-white 
                    transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <button onClick={toggleMenu} className="text-white mb-6">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className="space-y-6">
                        <li><a href="#" className="hover:text-green-300 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>

            {children}
        </header>
    );
};

export default Header;
