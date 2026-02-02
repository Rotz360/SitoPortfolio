import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <div className="logo"></div>
                    <nav className="nav">
                        <a href="#hero">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#portfolio">Works</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <div className="container footer-content">
                    <p>&copy; {new Date().getFullYear()} Andrea Rottini - Technical Artist</p>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/andrea-rottini/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.artstation.com/andrearottini" target="_blank" rel="noopener noreferrer">ArtStation</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
