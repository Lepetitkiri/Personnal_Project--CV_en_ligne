import React from "react";

// Components
import Header from '../../Components/Header/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

const Home = ({ basename }) => {

    return (
        <>
            <Header basename={basename} pageTitle='Home' />
            <main>
                <Section basename={basename} pageTitle='Home' />
            </main>
            <Footer />
        </>
    );
}

export default Home;