import React from 'react';
import './Hero.css';

import profileImg from '../../assets/portfolio/DSC03952.png';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h2 className="subtitle">Andrea Rottini</h2>
                    <h1 className="title">Technical<br />Artist</h1>
                    <p className="description">
                        Driven by order, curiosity, and a relentless problem-solving mindset, I bridge the gap between creative vision and technical constraints in games and VFX.<br /><br />
                        I specialize in Shader development, Houdini proceduralism, and deep game optimization.<br /><br />
                        Rather than getting stuck on traditional programming paradigms, I focus on communication and out-of-the-box thinking.<br /><br />
                        I love working side-by-side with Artists to build custom tools and shaders that speed up their workflow.<br /><br />
                        I am constantly expanding my technical toolkit, my proactive approach to learning means I never walk away from a challenge, I quickly research, adapt, and implement new workflows to overcome any hurdle and keep the project moving forward.
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
