import React from 'react';
import Hero from '../components/Hero.jsx';
import Feature from '../components/Feature.jsx';
import Cta from '../components/Cta.jsx';
import Footer from '../components/Footer.jsx';



export default function LandingPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div id="product">
                <Hero/>
            </div>
            <div id="feautres">
                <Feature/>
            </div>
            <div id="cta">
                <Cta/>
            </div>
            <div id="contact">
                <Footer/>
            </div>
        </div>
    )
}