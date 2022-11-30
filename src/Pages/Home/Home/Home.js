import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertice from '../Advertice/Advertice';
import Banner from '../Banner/Banner';
import CategoriesName from '../CategoriesName/CategoriesName';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesName></CategoriesName>
             <AboutUs></AboutUs>
             <Advertice></Advertice>
            
        </div>
    );
};

export default Home;