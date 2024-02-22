import React from "react";

// Components
import Header from '../../Components/Header/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

function Home() {

    return (
        <>
            <Header pageTitle='Home' />
            <main>
                <Section pageTitle='Home' />
            </main>
            <Footer />
        </>
    );
}

export default Home;