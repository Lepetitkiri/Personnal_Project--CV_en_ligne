import React from "react";

// Components
import Header from '../../Components/Header/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

const CV = ({ basename }) => {

    return (
        <>
            <Header basename={basename} pageTitle='CV' />
            <main>
                <Section basename={basename} pageTitle='CV' />
            </main>
            <Footer />
        </>
    );
}


export default CV