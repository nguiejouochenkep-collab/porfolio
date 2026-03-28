import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection'; 
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <Hero />
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <ProjectsSection /> {/* Ajoute cette section ici */}
            </div>
            <Footer />
        </main>
    );
};

export default HomePage;
