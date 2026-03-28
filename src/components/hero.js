import React from 'react';

const hero = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Ta photo de profil */}
        <div className="w-40 h-40 mb-8">
          <img 
            src="/ma-photo.jpg" 
            alt="Lynsha Chenkep"
            className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-xl"
          />
        </div>

        {/* Ton Nom et Titre */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Lynsha <span className="text-blue-600">Chenkep</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl">
          Étudiante en <span className="text-blue-500 italic">Génie Logiciel</span> à l'IUT de Bandjoun.
        </p>

        <p className="mt-4 text-gray-500">
          Passionnée par le développement web (PHP/Next.js) et les réseaux informatiques.
        </p>

        {/* Boutons d'action rapides */}
        <div className="mt-10 flex gap-4">
          <a 
            href="https://github.com/nguiejouochenkep-collab" 
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
          >
            Voir mes projets GitHub
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
