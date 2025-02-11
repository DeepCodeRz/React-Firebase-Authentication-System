import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Feature from '../components/Feature.jsx';
import Cta from '../components/Cta.jsx';
import Footer from '../components/Footer.jsx';



export default function Landing() {
    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <div className="w-full" id="home">
                <Header/>
            </div>
            <div id="home">
                <Hero/>
            </div>
            <div id="feautres">
                <Feature/>
            </div>
            <div id="product">
                <Cta/>
            </div>
            <div id="contact">
                <Footer/>
            </div>
        </div>
    )
}