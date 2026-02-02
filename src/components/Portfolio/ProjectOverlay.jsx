import React from 'react';
import './ProjectOverlay.css';

const ProjectOverlay = ({ project, onClose }) => {
    // Lock body scroll when modal is open and prevent layout shift
    React.useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.paddingRight = '0px';
            document.body.style.overflow = 'unset';
        };
    }, []);


    if (!project) return null;

    return (
        <div className="overlay-backdrop" onClick={onClose}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="overlay-image">
                    <img src={project.image} alt={project.title} />
                    <div className="overlay-category">{project.category}</div>
                </div>

                <div className="overlay-details">
                    <h2 className="overlay-title">{project.title}</h2>
                    <div className="overlay-description">
                        <p>{project.description}</p>

                        {project.videoUrl && (
                            <div className="video-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={project.videoUrl.replace('watch?v=', 'embed/')}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                                ></iframe>
                            </div>
                        )}

                        {/* Render detailed content if available */}
                        {project.detailedContent && project.detailedContent.map((section, index) => (
                            <div key={index} className="extended-text-section">
                                {section.heading && <h3 className="overlay-subtitle">{section.heading}</h3>}
                                <p className="extended-text">{section.text}</p>
                            </div>
                        ))}

                        {/* Fallback for placeholder text if no detail content is present (only for placeholder items) */}
                        {!project.detailedContent && !project.videoUrl && (
                            <p className="extended-text">
                                No additional details available for this project yet.
                            </p>
                        )}

                        <div className="overlay-tags">
                            {project.technologies ? (
                                project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))
                            ) : (
                                /* Fallback tags if none specified, or empty */
                                <>
                                    <span className="tech-tag">Unity</span>
                                    <span className="tech-tag">C#</span>
                                    <span className="tech-tag">VFX Graph</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOverlay;
