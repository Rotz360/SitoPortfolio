import React from 'react';
import './Portfolio.css';

// Import images
// import leilaImg from '../../assets/portfolio/leila.jpg';
// import combatFieldImg from '../../assets/portfolio/combat-field.jpg';
import cloudsImg from '../../assets/portfolio/clouds.jpg';
import ldrImg from '../../assets/portfolio/ldr.jpg';
import cosiComodoImg from '../../assets/portfolio/cosi-comodo.png';
import berserkerImg from '../../assets/portfolio/berserker.jpg';
import aquariumImg from '../../assets/portfolio/aquarium.png';
import ProjectOverlay from './ProjectOverlay';

const placeholderImg = "https://placehold.co/600x400/2a2a2a/FFF?text=Image+Not+Available";

const projects = [
    {
        id: 1,
        title: "Leila - The Land of Imagination",
        category: "VFX / Multimedia",
        image: placeholderImg,
        description: "Work for Saudi Arabian National Day 2019. Served as Multimedia Designer creating immersive visual effects."
    },
    {
        id: 2,
        title: "Riyadh Season 2021",
        category: "Combat Field Design",
        image: placeholderImg,
        description: "Designed the Combat Field layout and visual elements for this major event."
    },
    {
        id: 3,
        title: "Clouds System",
        category: "Technical Art",
        image: cloudsImg,
        description: "Volumetric cloud rendering system for real-time environments."
    },
    {
        id: 4,
        title: "Love, Death & Robots",
        category: "Graduation Thesis",
        image: ldrImg,
        description: "Graduation thesis project inspired by the visual style of Love, Death & Robots."
    },
    {
        id: 5,
        title: "Cosi Comodo",
        category: "Commercial",
        image: cosiComodoImg,
        description: "Commercial project involving 3D design and compositing."
    },
    {
        id: 6,
        title: "Berserker",
        category: "Character Art",
        image: berserkerImg,
        description: "High-fidelity 3D character model and look development."
    },
    {
        id: 7,
        title: "Aquarium VR",
        category: "Interactive / VR",
        image: aquariumImg,
        description: "Interactive Encyclopedia VR experience exploring aquatic life."
    }
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2 className="section-title">Selected <span className="highlight">Works</span></h2>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay">
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay Component */}
            {selectedProject && (
                <ProjectOverlay
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Portfolio;
