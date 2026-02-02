import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                        <div className="info-item">
                            <span className="label">Email</span>
                            <a href="mailto:rottiniandrea701@gmail.com" className="value">rottiniandrea701@gmail.com</a>
                        </div>

                        <div className="info-item">
                            <span className="label">Phone</span>
                            <span className="value">+39 331 299 8889</span>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/andrea-rottini/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                            <a href="https://www.artstation.com/andrearottini" target="_blank" rel="noopener noreferrer" className="social-link">ArtStation</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
