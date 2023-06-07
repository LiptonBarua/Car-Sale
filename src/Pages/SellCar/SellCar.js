import React from 'react';

const SellCar = () => {
    return (
        <div style={{backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/956/868/1012/car-nissan-race-cars-road-wallpaper-preview.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center`}}>
          <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex items-center px-8 pt-10'>
                <img src="https://i.ibb.co/Pw9Dkpk/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger-1.png" alt="" />
                <div className='text-white'>
                    <h1>ARE YOU LOOKING FOR A CAR?</h1>
                    <p>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                    <button className="text-[white] border border-[#d01818] hover:bg-[black] hover:border-black  active:bg-[#d01818] bg-[#d01818] font-semibold text-sm mt-3 px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Search</button>

                </div>
            </div>
          <div className='flex items-center px-8 pt-10 bg-[#d01818]'>
                <div className='text-white'>
                    <h1>ARE YOU LOOKING FOR A CAR?</h1>
                    <p>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                    <button className="text-[#d01818] border border-[white] hover:bg-[black] hover:border-black hover:text-white  active:bg-[white] bg-[white] font-semibold text-sm mt-3 px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Contact</button>

                </div>
                <img src="https://i.ibb.co/Pw9Dkpk/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger-1.png" alt="" />

            </div>
       
          </div>
          </div>
        </div>
    );
};

export default SellCar;