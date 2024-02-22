import React from "react";

// Components
import Error from "../../Components/Error/Index";
import Footer from '../../Components/Footer/Index';

// Provider

function ErrorPage() {

    return (
        <>
            <main>
                <Error />
            </main>
            <Footer />
        </>
    );
}

export default ErrorPage;