import React, { useState, useEffect } from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <div className="logo">A. ROTTINI</div>
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#hero" onClick={closeMenu}>Home</a>
                        <a href="#skills" onClick={closeMenu}>Skills</a>
                        <a href="#experience" onClick={closeMenu}>Experience</a>
                        <a href="#portfolio" onClick={closeMenu}>Works</a>
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </nav>
                </div>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <div className="container footer-content">
                    <p>&copy; {new Date().getFullYear()} Andrea Rottini - Technical Artist</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
