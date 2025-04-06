import React from 'react';
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Cta from "./cta.jsx";
import About from "./about.jsx";
import Footer from "@/pages/home/footer.jsx";

const Index = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Cta />
            <Footer />
        </div>
    );
};

export default Index;