import React from 'react';
import './Portfolio.css';

// Import images
import leilaImg from '../../assets/portfolio/Leila.jpg';
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
        id: 10,
        title: "Procedural Generation Content (PCG)",
        category: "Technical Art / Tools",
        image: placeholderImg,
        description: "Exploration of procedural content generation techniques in Unreal Engine 5."
    },
    {
        id: 11,
        title: "Shader Studies",
        category: "Technical Art / Shaders",
        image: placeholderImg,
        description: "Collection of advanced shader sketches and material studies."
    },
    {
        id: 12,
        title: "Tool Studies",
        category: "Technical Art / Tools",
        image: placeholderImg,
        description: "Custom editor tools and pipeline automation scripts."
    },
    {
        id: 13,
        title: "Houdini Tools",
        category: "Technical Art / Procedural",
        image: placeholderImg,
        description: "Procedural assets and tools created with SideFX Houdini."
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
        videoUrl: "https://www.youtube.com/watch?v=yVSJzF-MU0c",
        description: "Interactive Encyclopedia VR experience exploring aquatic life.",
        detailedContent: [
            {
                text: "VR project created for the Fine Arts Academy Thesis."
            },
            {
                text: "AQUARIUM is a VR Interactive Encyclopedia application where you can Explore in VR a marine environment to discover scientific and biological informations from the living species swimming around."
            },
            {
                text: "The main idea of this projects came to my mind because I wanted to create something that merged my two study paths, the Scientific one (from High School and the first Year of University) and the Artistic one where I got graduated."
            },
            {
                text: "I wanted to create something useful for learing at school in a new, interactive and funny way... also because I got really bored from the books pictures and I could not ever imagine what was going on in the real world."
            },
            {
                heading: "WORKFLOW",
                text: "I started building the Environment in Unity, the software we mostly used in Academy, being very careful to not make it too dense because the of the VR target."
            },
            {
                text: "I also had a lot of research about Marine Life and Underwater Environment to place the props in the most realistic way possible but also to place the fish in their natural habitat."
            },
            {
                text: "Once I populated the environment I added the fish from a Unity Pack from Marketplace and added a path for every fish that would have followed during the playthrough. I also added fish flocking for smaller fish and coral related fish."
            },
            {
                text: "Then I added the full movement control for VR and also a Raycast from the Right Hand in which players had to scan the fish (what will properly stop in place) to discover their informations with an interactive card that wll be stored later in a Fish Agenda."
            },
            {
                text: "In the game at the end there are more than 20 fish to collect and a large map to explore to discover curiosities about the Marine Fauna."
            }
        ]
    },
    {
        id: 1,
        title: "Multimedia Design",
        category: "Visual Effects & Events",
        image: leilaImg,
        videoUrl: "https://www.youtube.com/watch?v=JwbahYdfbN0",
        description: "Includes major projects like 'Leila - The Land of Imagination' (Saudi National Day 2019) and 'Riyadh Season 2021' (Combat Field Design).",
        technologies: ["Unreal Engine 5"]
    }
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2 className="section-title">Selected Works</h2>

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
// Forced update
