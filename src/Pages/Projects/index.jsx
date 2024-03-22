import React from "react";

// Components
import Header from '../../Components/Header/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

const Projects = ({ basename }) => {

    return (
        <>
            <Header basename={basename} pageTitle='Projects' />
            <main>
                <Section basename={basename} pageTitle='Projects' />
            </main>
            <Footer />
        </>
    );
}


export default Projects