import React from 'react';
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Cta from "./Cta.jsx";
import About from "./About.jsx";
import Footer from "@/pages/home/Footer.jsx";

const Index = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <Cta />
            <Footer />
        </div>
    );
};

export default Index;