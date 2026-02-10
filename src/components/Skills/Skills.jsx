import React from 'react';
import './Skills.css';

const skillsData = [
    { category: "Engines", items: ["Unreal Engine 5", "Unity"] },
    { category: "3D Softwares", items: ["Houdini", "Maya", "ZBrush", "Blender", "Substance Painter", "Substance Designer", "Photoshop"] },
    { category: "Programming", items: ["C++", "Python", "C#"] },
    { category: "Technical Skills", items: ["Shader", "Niagara VFX", "Performance Profiling", "HLSL", "Rigging"] }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Proficiency</h2>

                <div className="skills-grid">
                    {skillsData.map((group, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category">{group.category}</h3>
                            <div className="skill-tags">
                                {group.items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
