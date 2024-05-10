//Import everything Needed
import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Resume from "../src/components/Resume/Resume";
import Footer from "../src/components/Footer/Footer";


function App() {
    const [currentComp, compChange] = useState("about");

    if (currentComp === 'About') {
        return <About />;
    }
    if (currentComp === 'Contact') {
        return <Contact />
    }
    if (currentComp === 'Footer') {
        return <Footer />
    }
    if (currentComp === 'Header') {
        return <Header />
    }
    if (currentComp === 'Nav') {
        return <Nav />
    }
    if (currentComp === 'Portfolio') {
        return <Portfolio />
    }
    if (currentComp === 'Resume') {
        return <Resume />
    }


    return (
        <div>
            
        </div>
    )
}