import React from "react";

// Components
import Header from '../../Components/Header/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

const Contact = ({ basename }) => {

    return (
        <>
            <Header basename={basename} pageTitle='Contact' />
            <main>
                <Section basename={basename} pageTitle='Contact' />
            </main>
            <Footer />
        </>
    );
}


export default Contact