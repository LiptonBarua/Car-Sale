
import React, { } from 'react';
// import Typewriter from 'typewriter-effect';
import './Banner.css'
import lago from '../../../Assets/950192_720-removebg-preview.png'
import bannerBackgrund from '../../../Assets/2021-Best-Smartphones-3-840x472.jpg.webp'



const Banner = () => {

  return (
    <section className="pt-14" style={{ backgroundImage: `url(${bannerBackgrund})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
      <div className="flex bg-[black] bg-opacity-90 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="text-white flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-5xl">Second Hand Mobiles For Sale !!!</h1>
          <p className="text-justify mt-6 mb-8 text-lg sm:mb-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#d01818]">Suspendisse</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={lago} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
};

export default Banner;



{/* <div className="hero container pt-14 h-[650px]" style={{ backgroundImage: `url(${bannerBackgrund})` }}>
      <div className="container hero-overlay bg-black bg-opacity-90"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={lago} className=" md:h-[390px] rounded-lg" alt='' />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-white">SECOND HAND MOBILES <span className='text-info'>FOR SALE !!!</span></h1>
      <p className="py-6 text-justify text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="bg-info text-black font-semibold uppercase px-8 py-3">Get Started</button>
    </div>
  </div>
    </div> */}

