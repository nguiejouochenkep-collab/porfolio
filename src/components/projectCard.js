import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.context}</p>
        
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => window.open(project.repositoryUrl, '_blank')}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded"
          >
            Code
          </button>
          <button 
            onClick={() => window.open(project.deployedUrl, '_blank')}
            className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-2 px-3 rounded"
          >
            Démo
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-xs bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2 px-3 rounded"
          >
            Détails
          </button>
        </div>
      </div>

      {/* Fenêtre Modale (Détails) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{project.name}</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Contexte :</strong> {project.context}</p>
              <p><strong>Rôle :</strong> {project.role}</p>
              <p><strong>Résultat :</strong> {project.result}</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-8 w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
