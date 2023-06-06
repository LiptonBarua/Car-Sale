import React from 'react';


const OfferBanner = () => {
    return (
        <section className="mb-16" style={{ backgroundImage: `url(https://i.ibb.co/BtCbpKq/car-nissan-race-cars-road-wallpaper-preview.jpg)`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
      <div className="flex bg-[#000000b3] bg-opacity-80 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-32 lg:flex-row lg:justify-between">
      <section className="md:max-w-[85%] mx-auto">
	<div className="text-center mb-14 text-white">
		<h2 className="text-3xl lg:text-5xl">What We Offer</h2>
		<p className="dark:text-gray-400">Tempor incididunt labore dolore duis lorem magna aliqua sed ipsum.</p>
	</div>

	<div className="container lg:-mb-48 mx-auto grid justify-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		<div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#d01818] hover:text-white" style={{transition: `1s`}}>
		<img className='w-16 h-16' src="https://i.ibb.co/sg3ySMy/deal.png" alt="" />
			<h3 className="mt-5 text-xl font-semibold">The Wheel</h3>
			<h3 className="text-2xl font-semibold">Balancing</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>

			</div>
		</div>
        <div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#d01818] hover:text-white hover:bg-[#d01818] hover:text-white" style={{transition: `1s`}}>
		<img className='w-16 h-16' src="https://i.ibb.co/sg3ySMy/deal.png" alt="" />
			<h3 className="mt-5 text-xl font-semibold">Transmission</h3>
			<h3 className="text-2xl font-semibold">Installation</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>

			</div>
		</div>
        <div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#d01818] hover:text-white" style={{transition: `1s`}}>
		<img className='w-16 h-16' src="https://i.ibb.co/sg3ySMy/deal.png" alt="" />
			<h3 className="mt-5 text-xl font-semibold">CarZone</h3>
			<h3 className="text-2xl font-semibold">Painting</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>

			</div>
		</div>
		<div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#d01818] hover:text-white" style={{transition: `1s`}}>
		<img className='w-16 h-16' src="https://i.ibb.co/sg3ySMy/deal.png" alt="" />
			<h3 className="mt-5 text-xl font-semibold">CarZone</h3>
			<h3 className="text-2xl font-semibold">Inspection</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>

			</div>
		</div>

	
	</div>
</section>
      </div>
    </section>
    );
};

export default OfferBanner;