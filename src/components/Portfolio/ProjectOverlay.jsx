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


    const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);
    const [standaloneImage, setStandaloneImage] = React.useState(null);
    const [activeModule, setActiveModule] = React.useState(null);

    const openLightbox = (content) => {
        if (typeof content === 'number') {
            setSelectedImageIndex(content);
            setStandaloneImage(null);
        } else {
            setStandaloneImage(content);
            setSelectedImageIndex(null);
        }
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        setStandaloneImage(null);
    };

    // Reset active module when overlay closes
    React.useEffect(() => {
        if (!project) setActiveModule(null);
    }, [project]);

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedImageIndex !== null && project.gallery) {
            setSelectedImageIndex((prev) => (prev + 1) % project.gallery.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedImageIndex !== null && project.gallery) {
            setSelectedImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
        }
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeModule) {
                if (e.key === 'Backspace') setActiveModule(null);
            }

            if (selectedImageIndex !== null || standaloneImage) {
                if (selectedImageIndex !== null) {
                    if (e.key === 'ArrowRight') nextImage(e);
                    if (e.key === 'ArrowLeft') prevImage(e);
                }
                if (e.key === 'Escape') closeLightbox();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, standaloneImage, activeModule]);

    if (!project) return null;

    // Determine current image for lightbox
    const isLightboxOpen = selectedImageIndex !== null || standaloneImage !== null;
    const currentLightboxImage = selectedImageIndex !== null && project.gallery ? project.gallery[selectedImageIndex] : standaloneImage;

    // Determine data to display (Main Project or Active Module)
    const displayData = activeModule || project;

    return (
        <div className="overlay-backdrop" onClick={onClose}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                {activeModule && (
                    <button className="back-btn" onClick={() => setActiveModule(null)} style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'rgba(0,0,0,0.5)',
                        border: 'none',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        zIndex: 10
                    }}>
                        &#8592; Back to {project.title}
                    </button>
                )}

                <div className="overlay-image">
                    <img src={displayData.overlayImage || displayData.image} alt={displayData.title} />
                    <div className="overlay-category">{project.category} {activeModule ? ` / ${activeModule.title}` : ''}</div>
                </div>

                <div className="overlay-details">
                    <h2 className="overlay-title">{displayData.title}</h2>
                    <div className="overlay-description">
                        <p>{displayData.description}</p>

                        {/* Module Grid - Only show if NO active module and project HAS modules */}
                        {!activeModule && project.modules && (
                            <div className="modules-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                gap: '1.5rem',
                                marginTop: '2rem',
                                marginBottom: '2rem'
                            }}>
                                {project.modules.map((module) => (
                                    <div
                                        key={module.id}
                                        className="module-card"
                                        onClick={() => setActiveModule(module)}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <div style={{ height: '140px', overflow: 'hidden' }}>
                                            <img
                                                src={module.image}
                                                alt={module.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div style={{ padding: '1rem' }}>
                                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{module.title}</h4>
                                            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {module.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {displayData.videoUrl && (
                            <div className="video-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={displayData.videoUrl.replace('watch?v=', 'embed/')}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                                ></iframe>
                            </div>
                        )}

                        {/* Render detailed content if available */}
                        {displayData.detailedContent && displayData.detailedContent.map((section, index) => (
                            <div key={index} className="extended-text-section">
                                {section.heading && <h3 className="overlay-subtitle">{section.heading}</h3>}

                                {section.video && (
                                    <div className="content-video-container" style={{ marginBottom: '1rem' }}>
                                        {(section.video.includes('youtube.com') || section.video.includes('youtu.be')) ? (
                                            <iframe
                                                width="100%"
                                                height="400"
                                                src={section.video.replace('watch?v=', 'embed/')}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                                            ></iframe>
                                        ) : (
                                            <video
                                                src={section.video}
                                                controls
                                                style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                                            />
                                        )}
                                    </div>
                                )}

                                {section.text && <p className="extended-text">{section.text}</p>}

                                {section.links && (
                                    <ul className="content-links-list">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="content-link"
                                                >
                                                    {link.text || link.url}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.image && (
                                    <div className="content-image-container" style={{ marginBottom: '1rem' }}>
                                        <img
                                            src={section.image}
                                            alt={section.heading || "Project detail"}
                                            style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}
                                            onClick={() => openLightbox(section.image)}
                                        />
                                    </div>
                                )}

                                {section.images && (
                                    <div className="content-images-grid" style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '1rem',
                                        marginTop: '1rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {section.images.map((img, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="content-image-item"
                                                style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}
                                                onClick={() => openLightbox(img)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Detail ${imgIndex + 1}`}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Fallback for placeholder text if no detail content is present (only for placeholder items) */}
                        {!displayData.detailedContent && !displayData.videoUrl && !project.modules && (
                            <p className="extended-text">
                                No additional details available for this project yet.
                            </p>
                        )}

                        {/* Image Gallery Thumbnails - Moved to bottom */}
                        {project.gallery && project.gallery.length > 0 && !activeModule && (
                            <div className="project-gallery-grid">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="gallery-thumbnail"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <img src={img} alt={`${project.title} gallery ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
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

            {/* Lightbox Modal */}
            {isLightboxOpen && currentLightboxImage && (
                <div className="lightbox-backdrop" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>×</button>

                        {selectedImageIndex !== null && (
                            <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>
                        )}

                        <img src={currentLightboxImage} alt={`Fullscreen view`} />

                        {selectedImageIndex !== null && (
                            <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
                        )}

                        {selectedImageIndex !== null && project.gallery && (
                            <div className="lightbox-counter">
                                {selectedImageIndex + 1} / {project.gallery.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectOverlay;
