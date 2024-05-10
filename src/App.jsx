//Import everything Needed
import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Resume from "../src/components/Resume/Resume";
import Footer from "../src/components/Footer/Footer";
import NavTabs from "../src/components/Nav/Nav"

currentComp = 'About'
function App() {
    const [currentPage, handlePageChange] = useState("About");


    if (currentPage === 'About') {
        return <About />;
    }
    if (
        currentPage === 'Contact') {
        return <Contact />
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />
    }
    if (currentPage === 'Resume') {
        return <Resume />
    }


    return (
        <>
        <title>Mark Tovar | {currentPage} </title>
        <Header
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            ></Header>
            <main>{App()}</main>
            <Footer></Footer>
        </>
    )
}

export default App;