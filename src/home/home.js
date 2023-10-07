import React from "react";
import Banner from "../imageBanner/Banner";
import Header from "../navMenu/Header";
import Footer from "../navMenu/Footer";
import NewArrival from "../component/NewArrival"
function Home() {

    return (
        <>
            <Header/>
            <Banner />
            <NewArrival/>
            <Footer/>
        </>
    );
}

export default Home;
