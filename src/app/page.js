import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Skills />
            <Footer />
        </main>
    );
};

export default HomePage;
