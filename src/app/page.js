import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import ProjectCard from '@/components/ProjectCard'; 
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <Hero />
            <div id="skills">
                <Skills />
            </div>
            <div id="projects" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6">Mes Projets</h2>
                <ProjectCard /> 
            </div>
            <Footer />
        </main>
    );
};

export default HomePage;
