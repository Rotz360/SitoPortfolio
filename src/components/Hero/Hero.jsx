import React from 'react';
import './Hero.css';

import profileImg from '../../assets/portfolio/DSC03952.png';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <h2 className="subtitle">Andrea Rottini</h2>
                    <h1 className="title">Technical<br />Artist</h1>
                    <p className="description">
                        Italian-born and fueled by a lifelong passion for interactive tech.<br /><br />
                        My mission? To constantly evolve—fusing art, design, and code to forge innovative tools and immersive solutions.<br /><br />
                        With a background as 3D Artist and Visual Effects Creator, I bring a relentless drive and a battle-hardened collaborative spirit to every project I touch.
                    </p>
                    <div className="cta-group">
                        <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={profileImg} alt="Andrea Rottini" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
