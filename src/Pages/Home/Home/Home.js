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




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dealership></Dealership>
            <CategoriesName></CategoriesName>
            <CarSales></CarSales>
             <Advertice></Advertice>
             <CarDealer></CarDealer>
             <Testimonial></Testimonial>
             <SmallBanner></SmallBanner>
             <AboutUs></AboutUs>
        </div>
    );
};

export default Home;