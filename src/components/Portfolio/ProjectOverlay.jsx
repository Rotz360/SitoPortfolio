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
                        {/* Extended description placeholder - in real usage, this would come from the project data */}
                        <p className="extended-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="extended-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <p className="extended-text">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        </p>
                        <p className="extended-text">
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                        <p className="extended-text">
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </p>
                    </div>

                    <div className="overlay-tags">
                        {/* Placeholder tags based on category */}
                        <span className="tech-tag">Unity</span>
                        <span className="tech-tag">C#</span>
                        <span className="tech-tag">VFX Graph</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOverlay;
