
import React, { } from 'react';
// import Typewriter from 'typewriter-effect';
import './Banner.css'
import lago from '../../../Assets/950192_720-removebg-preview.png'
import bannerBackgrund from '../../../Assets/2021-Best-Smartphones-3-840x472.jpg.webp'



const Banner = () => {

    return (
      <div className="hero pt-14 h-[650px] md:min-h-screen" style={{ backgroundImage: `url(${bannerBackgrund})` }}>
      <div className="hero-overlay bg-black bg-opacity-90"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={lago} className=" md:h-[390px] rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-white">SECOND HAND MOBILES <span className='text-orange-500'>FOR SALE !!!</span></h1>
      <p className="py-6 text-justify text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="bg-lime-700 text-black font-bold rounded-lg px-8 py-3">Get Started</button>
    </div>
  </div>
    </div>
    );
};

export default Banner;

