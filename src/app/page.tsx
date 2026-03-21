import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

const HomePage = () => {
    // Load projects data here

    return (
        <div>
            <Header />
            <Hero />
            <Skills />
            <ProjectsGrid />
            <Footer />
        </div>
    );
};

export default HomePage;
