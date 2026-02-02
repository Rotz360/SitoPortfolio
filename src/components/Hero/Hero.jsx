import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <h2 className="subtitle">Andrea Rottini</h2>
                <h1 className="title">Technical<br /><span className="highlight">Artist</span></h1>
                <p className="description">
                    Fusing art, design, and interactive technologies to build immersive digital experiences.
                </p>
                <div className="cta-group">
                    <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
