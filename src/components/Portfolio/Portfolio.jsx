import React from 'react';
import './Portfolio.css';

// Import images
import leilaImg from '../../assets/portfolio/Leila.jpg';
// import combatFieldImg from '../../assets/portfolio/combat-field.jpg';
import cloudsImg from '../../assets/portfolio/clouds.jpg';
import ldrImg from '../../assets/portfolio/ldr.jpg';
import cosiComodoImg from '../../assets/portfolio/cosiComodo.jpg';
import dragonRigVideo from '../../assets/portfolio/Dragon_Rig.mp4';
import berserkerImg from '../../assets/portfolio/berserker.png';
import berserkerMainImg from '../../assets/portfolio/Berserker/main.jpg';
import berserker2 from '../../assets/portfolio/Berserker/2.jpg';
import berserker3 from '../../assets/portfolio/Berserker/3.jpg';
import berserker01 from '../../assets/portfolio/Berserker/andrea-rottini-01.jpg';
import berserker02 from '../../assets/portfolio/Berserker/andrea-rottini-02.jpg';
import berserker06 from '../../assets/portfolio/Berserker/andrea-rottini-06.jpg';

import aquariumImg from '../../assets/portfolio/aquarium.png';

// Skyup LDR Images
import skyupFrame1 from '../../assets/portfolio/Skyup/FrameScena_01_PostComp.jpg';
import skyupFrame2 from '../../assets/portfolio/Skyup/FrameScena_02_PostComp.jpg';
import skyupFrame4 from '../../assets/portfolio/Skyup/FrameScena_04_PostComp.jpg';
import skyupFrame5 from '../../assets/portfolio/Skyup/FrameScena_05_PostComp.jpg';

import orangeRobotVideo from '../../assets/portfolio/Skyup/ORANGE_ROBOT_COMPARISON.mp4';
import ldrLogo from '../../assets/portfolio/Skyup/LDR_Logo.png';

import ProjectOverlay from './ProjectOverlay';

const placeholderImg = "https://placehold.co/600x400/2a2a2a/FFF?text=Image+Not+Available";

const projects = [
    {
        id: 10,
        title: "Procedural Generation Content (PCG)",
        category: "Technical Art / Tools",
        image: placeholderImg,
        description: "Exploration of procedural content generation techniques in Unreal Engine 5.",
        technologies: ["Unreal Engine 5"],
        modules: [
            {
                id: "pcg1",
                title: "PCG Forest Generator",
                image: placeholderImg,
                description: "PCG graph for spawning realistic forests with biome rules.",
                detailedContent: [{ heading: "Forest Generator Logic", text: "Details on the PCG graph nodes used for tree placement and density control." }]
            },
            {
                id: "pcg2",
                title: "PCG Spline Tool",
                image: placeholderImg,
                description: "Procedural placement of objects along a spline path.",
                detailedContent: [{ heading: "Spline Tool Logic", text: "Explanation of how splines drive the instantiation of static meshes." }]
            },
            {
                id: "pcg3",
                title: "PCG Crops Tool",
                image: placeholderImg,
                description: "System for efficient crop scattering on landscape layers.",
                detailedContent: [{ heading: "Crops System", text: "Techniques for large-scale crop rendering and placement." }]
            },
            {
                id: "pcg4",
                title: "PCG River Tool",
                image: placeholderImg,
                description: "Spline-based river generation with flow mapping.",
                detailedContent: [{ heading: "River Tool Breakdown", text: "How the river tool carves terrain and generates water meshes." }]
            }
        ]
    },
    {
        id: 11,
        title: "Shader Studies",
        category: "Technical Art / Shaders",
        image: placeholderImg,
        description: "Collection of advanced shader sketches and material studies.",
        technologies: ["Unreal Engine 5"],
        modules: [
            {
                id: "s1",
                title: "Landscape Material",
                image: placeholderImg,
                description: "Auto-material for terrain with blending and tessellation.",
                detailedContent: [{ heading: "Landscape Shader Breakdown", text: "Deep dive into layer blending and height-based mixing." }]
            },
            {
                id: "s2",
                title: "Foliage Shader",
                image: placeholderImg,
                description: "Advanced foliage rendering with wind interaction.",
                detailedContent: [{ heading: "Foliage Interaction", text: "Shader techniques for realistic wind movement and player interaction." }]
            },
            {
                id: "s3",
                title: "Armor Shader",
                image: placeholderImg,
                description: "Metal and cloth shader optimized for character armor.",
                detailedContent: [{ heading: "Armor Material", text: "Anisotropic highlights and detail normal mapping for armor." }]
            },
            {
                id: "s4",
                title: "Fake Lighting Shader",
                image: placeholderImg,
                description: "Stylized lighting model for non-photorealistic rendering.",
                detailedContent: [{ heading: "Fake Lighting Math", text: "Custom lighting calculations using dot products and ramp textures." }]
            }
        ]
    },
    {
        id: 12,
        title: "Tool Studies",
        category: "Technical Art / Tools",
        image: placeholderImg,
        description: "Custom editor tools and pipeline automation scripts.",
        technologies: ["Unreal Engine 5"],
        modules: [
            {
                id: "ts1",
                title: "Procedural Spline Tool",
                image: placeholderImg,
                description: "Blueprint tool for placing objects along a spline with randomization.",
                detailedContent: [{ heading: "Spline Logic", text: "How the spline component drives the instantiation of static meshes." }]
            },
            {
                id: "ts2",
                title: "Level Design Tools",
                image: placeholderImg,
                description: "Suite of editor utilities to speed up level blockouts.",
                detailedContent: [{ heading: "Level Tools", text: "Overview of the snapping, aligning, and grouping tools created." }]
            },
            {
                id: "ts3",
                title: "Lake Tool",
                image: placeholderImg,
                description: "Water body generator with automatic shore detection.",
                detailedContent: [{ heading: "Lake Tech", text: "Distance field usage for foam generation and shore blending." }]
            },
            {
                id: "ts4",
                title: "Editor Scripting",
                image: placeholderImg,
                description: "Python and C++ automation scripts for the editor.",
                detailedContent: [{ heading: "Automation", text: "Examples of pipeline tasks automated via editor scripting." }]
            }
        ]
    },
    {
        id: 13,
        title: "Houdini Tools",
        category: "Technical Art / Procedural",
        image: placeholderImg,
        description: "Procedural assets and tools created with SideFX Houdini.",
        technologies: ["Houdini", "Unreal Engine 5"],
        modules: [
            {
                id: "ht1",
                title: "Vines HDA",
                image: placeholderImg,
                description: "Houdini Digital Asset for generating procedural vines on static meshes.",
                detailedContent: [{ heading: "Vines Logic", text: "Algorithm for climbing vines using shortest path and noise." }]
            },
            {
                id: "ht2",
                title: "Procedural Bridge HDA",
                image: placeholderImg,
                description: "HDA for generating bridge variations along a curve.",
                detailedContent: [{ heading: "Bridge HDA", text: "Breakdown of the Houdini Digital Asset for bridge generation." }]
            },
            {
                id: "ht3",
                title: "VAT Fluid Sim",
                image: placeholderImg,
                description: "Vertex Animation Texture workflow for real-time fluids.",
                detailedContent: [{ heading: "VAT Workflow", text: "Pipeline for exporting Houdini fluid sims to game engines using VAT." }]
            },
            {
                id: "ht4",
                title: "Cable Generator",
                image: placeholderImg,
                description: "Procedural cable and wire generation tool.",
                detailedContent: [{ heading: "Cable Tool", text: "Logic for generating hanging cables with physics-based slack." }]
            }
        ]
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
        image: ldrLogo,
        videoUrl: "https://www.youtube.com/watch?v=4RnbBskHGXY",
        description: "Graduation thesis project inspired by the visual style of Love, Death & Robots.",
        detailedContent: [
            {
                heading: "LOVE, DEATH & ROBOTS THESIS TRIBUTE",
                text: "This Short Movie is the result of the Final Masterclass Thesis of my 3D Course at Skyup Academy."
            },
            {
                text: "The Movie is based on the Three Robots episode from the series Love, Death & Robots."
            },
            {
                text: "We created a production environment dividing our class in roles to produce the most efficent workflow and pipeline possible to recreate the shots."
            },
            {
                text: "My role was Lead Animator, so i had to animate the characters with other animators, coordinate them and try to match the robots movements as faithful as possible to the original episode."
            },
            {
                text: "I fully animated the Orange Robot and helped animating the other ones. I also made the Orange and Triangle Robots Rigs and some minor 3D Models, Texturing and Lighting."
            },
            {
                text: "I' m very happy with the final result and I want to thank all my classmates and friends for the work and dedication."
            },
            {
                video: orangeRobotVideo
            },
            {
                heading: "WORKFLOW",
                text: "Since I was Lead Animator and the Second Rigger, I had to organize the other animators work, trying to understand the movements of the robots and searching more references as possible, from the original episodes and from mechanics videos to undestand how an automata will move."
            },
            {
                text: "I had also to sync with the Lead Rigger to split between us the 3 rigs we had to do and we decided I had to make the Orange Robot and the Triangle Robot."
            },
            {
                text: "When the rigs were finished, the animation team could start working and I helped animating almost all the robots and I fully animated by myself the Orange one."
            },
            {
                text: "I'm very satisfied with the result and how my team worked."
            }
        ],
        gallery: [
            skyupFrame1,
            skyupFrame2,
            skyupFrame4,
            skyupFrame5
        ],
        technologies: ["Maya", "Zbrush", "Substance Painter", "Vray"]
    },
    {
        id: 5,
        title: "Cosi Comodo",
        category: "Commercial",
        image: cosiComodoImg,
        description: "Commercial project involving 3D design and compositing.",
        videoUrl: "https://www.youtube.com/watch?v=GeFaYmulDzM",
        detailedContent: [
            {
                heading: "COSI COMODO COMMERCIAL",
                text: "This is my first freelance work. The contact of the client was given to me by Mauro Baldissera, the Skyup Academy Director and Teacher."
            },
            {
                text: "My job was to Model, Texture, Rig and Animate 2 shots of a Toon Dragon talking about a Home Delivery Supermarket App."
            },
            {
                video: dragonRigVideo
            },
            {
                heading: "WORKFLOW",
                text: "Starting from a very basic concept, I sedigned the Toon Version of the Dragon, fully modeled in Zbrush."
            },
            {
                text: "Once I got the approval from the Art Director, I started texturing in Substance Painter, with the same freedom I had for the 3D Model."
            },
            {
                text: "Then I rigged it in a very basic way, because we decided that the Dragon would have stayed in the same place for the whole scenes and then I animated it syncing the dragon movements and lipsync with the audio of the scene."
            },
            {
                text: "For the Lipsync and the tongue I created multiple Blend Shapes and animate the transitions between them."
            },
            {
                video: "https://www.youtube.com/watch?v=DKJi8vA3_ZU"
            },
            {
                heading: "LINKS",
                links: [
                    { url: "https://differentglobal.com/comunicati-stampa/different-selex-cosicomodo/" },
                    { url: "https://unacom.it/cosicomodo-it-lecommerce-del-gruppo-selex-festeggia-sette-anni-con-different/" },
                    { url: "https://www.engage.it/campagne/cosicomodoit-l-ecommerce-del-gruppo-selex-festeggia-sette-anni-con-il-debutto-in-comunicazione.aspx" }
                ]
            }
        ],
        technologies: ["Maya", "Zbrush", "Substance Painter"]
    },
    {
        id: 6,
        title: "Berserker",
        category: "Character Art",
        image: berserkerImg,
        description: "High-fidelity 3D character model and look development.",
        detailedContent: [
            {
                image: berserkerMainImg
            },
            {
                images: [berserker2, berserker3]
            },
            {
                heading: "BERSERKER",
                text: "This character is the result of a team work of 5 people done during the CG Masterclass at Skyup Academy."
            },
            {
                text: "In this project my role was to Model and Texture some armor props like axes, belts, forearms, chainmail and some minor props."
            },
            {
                text: "I also Rigged and Posed the model and made Shading and LookDev in Maya."
            },
            {
                heading: "WORKFLOW",
                text: "We started analyzing the concept trying to understand how to divide the tasks between group members and how many elements composed the character."
            },
            {
                text: "We created then a wall of references and imagines a concept for a small environment."
            },
            {
                text: "Then we started blocking out the models keeping the volumes and the basic shapes of the concept. And continued modeling the High Poly details and the Environment."
            },
            {
                text: "Then we started photorealistic texturing in Substance Painter."
            },
            {
                text: "At the end, we rigged and posed the character and using X-GEN we added the fur of the beard and the coat and started with some render tests."
            }
        ],
        gallery: [
            berserker01,
            berserker02,
            berserker06
        ],
        technologies: ["Maya", "Zbrush", "Substance Painter", "X-GEN", "Vray"]
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
