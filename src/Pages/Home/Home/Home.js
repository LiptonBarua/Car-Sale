import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertice from '../Advertice/Advertice';
import Banner from '../Banner/Banner';
import CarDealer from '../CarDealer/CarDealer';
import CategoriesName from '../CategoriesName/CategoriesName';
import SmallBanner from '../SmallBanner/SmallBanner';
import Testimonial from '../Testimonial/Testimonial';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesName></CategoriesName>
             <Advertice></Advertice>
             <CarDealer></CarDealer>
             <Testimonial></Testimonial>
             <SmallBanner></SmallBanner>
             <AboutUs></AboutUs>
        </div>
    );
};

export default Home;