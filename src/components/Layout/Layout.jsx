import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <div className="logo">AR.Tech</div>
                    <nav className="nav">
                        <a href="#hero">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Andrea Rottini - Technical Artist</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
