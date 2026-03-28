import React from 'react';

const footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Navigation Gauche */}
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Lynsha Chenkep</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Accueil</a>
                        <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projets</a>
                        <a href="mailto:lynshachenkep@gmail.com" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                {/* Réseaux Sociaux Droite */}
                <div className="flex justify-center md:justify-end gap-6">
                    <a 
                        href="https://github.com/nguiejouochenkep-collab" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
                    >
                        <span>GitHub</span>
                    </a>
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} - Lynsha Chenkep | Étudiante en Génie Logiciel (IUT de Bandjoun)</p>
            </div>
        </footer>
    );
};

export default Footer;
