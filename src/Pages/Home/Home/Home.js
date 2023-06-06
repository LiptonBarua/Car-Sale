import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertice from '../Advertice/Advertice';
import Banner from '../Banner/Banner';
import CarDealer from '../CarDealer/CarDealer';
import CategoriesName from '../CategoriesName/CategoriesName';
import SmallBanner from '../SmallBanner/SmallBanner';
import Testimonial from '../Testimonial/Testimonial';
import CarSales from '../CarSales/CarSales';
import Dealership from '../Dealership/Dealership';
import OfferBanner from '../OfferBanner/OfferBanner';
import ContactMap from '../ContactMap/ContactMap';
import Subscribe from '../Subscribe/Subscribe';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dealership></Dealership>
            <CategoriesName></CategoriesName>
            <CarSales></CarSales>
             <Advertice></Advertice>
             <OfferBanner></OfferBanner>
             <CarDealer></CarDealer>
             <Testimonial></Testimonial>
             <SmallBanner></SmallBanner>
             <AboutUs></AboutUs>
             <Subscribe></Subscribe>
             <ContactMap></ContactMap>
        </div>
    );
};

export default Home;