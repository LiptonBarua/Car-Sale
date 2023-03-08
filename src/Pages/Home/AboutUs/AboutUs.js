import React from 'react';
import Car from '../../../Assets/Mitsubishi-Pajero-Exceed-625x378-removebg-preview.png'

const AboutUs = () => {
    return (
        <div className="hero py-10">
        <div className="hero-content flex-col lg:flex-row-reverse flex items-center">
          <img src={Car} alt='' className=" rounded-lg" />
          <div>
            <h1 className='text-center text-4xl mb-10'>About Us</h1>
            <p className='text-xl text-justify'>With our expetise in this domain, we Visionary Car at Malad west, Chittagong are engaged in buying and selling of Second hand car. Apart from this, we also deal in new and latest Car. we offer a quality used product backed up with exceptional customer service . All our product are processed through our strenuous quality control program to ensure that the product you receive is in full working order. Apart from this, we also deal in fresh and latest Car.</p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;