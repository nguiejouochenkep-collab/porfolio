import React from 'react';

const skills = () => {
    // Tes vraies compétences d'étudiante en Génie Logiciel
    const technicalSkills = ['Java (Swing/Socket)', 'PHP / MySQL', 'HTML5 & CSS3', 'JavaScript', 'Réseaux & Télécoms', 'UML / Modélisation'];
    const softSkills = ['Travail en équipe', 'Résolution de problèmes', 'Adaptabilité', 'Gestion du temps'];

    return (
        <section id="skills" className="max-w-6xl mx-auto py-12 px-4 bg-white">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 border-b-2 border-blue-200 pb-2">
                Compétences Techniques
            </h2>
            
            {/* Grille pour les compétences techniques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {technicalSkills.map(skill => (
                    <div key={skill} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-400 transition-all cursor-default">
                        <span className="text-blue-600 font-semibold">{skill}</span>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-700 mb-8 border-b-2 border-gray-200 pb-2">
                Soft Skills
            </h2>

            {/* Grille pour les soft skills */}
            <div className="flex flex-wrap gap-4">
                {softSkills.map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
