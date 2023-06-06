import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <section className="bg-[#d01818] my-24">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">



                    <div className=" flex items-center justify-center mt-4">
                        <div>
                            <div className='text-center'>
                                <p className='text-white'>Get the latest news from MotorLand</p>
                                <h2 className="mb-4 text-2xl tracking-tight font-semibold sm:text-4xl text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
                            </div>
                            <input className='md:ml-12 ml-0 md:w-80 py-3 px-6 rounded-l-lg' placeholder="Email Address" type="email" name="" id="" />
                            {/* <input type="email" name="email" placeholder="Email Address" className="input md:w-80  dark:text-black" /> */}
                            <button className="bg-black rounded-r-lg text-white font-bold py-3 px-6">Subscribe</button>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Subscribe;