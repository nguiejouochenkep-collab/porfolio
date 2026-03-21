import React from 'react';

const Skills: React.FC = () => {
    const technicalSkills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'HTML'];
    const softSkills = ['Communication', 'Teamwork', 'Problem-solving', 'Adaptability', 'Time Management'];

    return (
        <div>
            <h2>Technical Skills</h2>
            <ul>
                {technicalSkills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <h2>Soft Skills</h2>
            <ul>
                {softSkills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
};

export default Skills;