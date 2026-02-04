import React from 'react';
import './Experience.css';

const experienceData = [
    {
        period: "2023 - Present",
        role: "Mid Technical Artist",
        company: "Couch Heroes (Remote)",
        description: "Joined the Indie game company Couch Heroes working fully remote from Italy. Focused on technical art pipelines and asset integration."
    },
    {
        period: "2022 - 2023",
        role: "CG Masterclass Student",
        company: "Skyup Academy",
        description: "Intensive 6-month Masterclass directed by Mauro Baldissera. Developed advanced skills in CG and Tech Art, growing in abilities and knowledge."
    },
    {
        period: "2019 - 2022",
        role: "3D Multimedia Designer & Special Effects Operator",
        company: "SUPER FX",
        description: "Managed multimedia projects for major brands (F1, XFactor, UEFA, SKY). Worked on video editing, effect design, and stage rendering. Handled strict daily deadlines in a high-pressure environment."
    },
    {
        period: "2016 - 2020",
        role: "Fine Arts Degree",
        company: "Hdemia di Belle Arti Santa Giulia",
        description: "Graduated with a degree in Fine Arts. Learned basics of 3D Modeling, Animation, Rigging, Photoshop, and Unity Game Development."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{item.period}</div>
                            <div className="timeline-content">
                                <h3>{item.role}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
