import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // FormData for Web3Forms
        const data = new FormData();
        data.append("access_key", "3b3cd9c3-683c-45d8-a4ce-1d469aac6722"); // Web3Forms Access Key
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // reset form
                setTimeout(() => setStatus(''), 5000); // clear success message after 5s
            } else {
                console.error("Error from Web3Forms:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setStatus('error');
        }
    };

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

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required disabled={status === 'loading'} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required disabled={status === 'loading'} />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required disabled={status === 'loading'}></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p className="form-success-msg" style={{color: 'var(--accent-primary)', marginTop: '1rem', fontWeight: 'bold'}}>Message sent successfully!</p>}
                        {status === 'error' && <p className="form-error-msg" style={{color: '#ff4444', marginTop: '1rem', fontWeight: 'bold'}}>Something went wrong. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
