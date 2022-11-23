import React from 'react';
import banner from '../../../Assets/2021-Best-Smartphones-3-840x472.jpg.webp'

const Banner = () => {
    return (
        <section>
          <div className="hero h-96" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">SECOND HAND MOBILES FOR SALE !!!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </section>
    );
};

export default Banner;