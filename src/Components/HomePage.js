import React from 'react';
import Header from '../Components/Header/Header.js'
import Footer from '../Components/Footer/Footer.js'
import Cover from '../Components/Cover/Cover.js'
import Carousel from '../Components/Carousel/Carousel.js';
import ContactUs from '../Components/Contactus/Contactus.js'



export default function HomePage() {
    return (
        <div>
            <Header />
            <Cover />
            <Carousel />
            <ContactUs />

            <Footer />
            
        </div>
    )
}
