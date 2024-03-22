import React from "react";

// Components
import Error from "../../Components/Error/Index";
import Footer from '../../Components/Footer/Index';

// Provider

const ErrorPage = ({ basename }) => {

    return (
        <>
            <main>
                <Error basename={basename} />
            </main>
            <Footer />
        </>
    );
}

export default ErrorPage;