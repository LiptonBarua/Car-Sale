import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {} from 'react-day-picker';
import { format } from 'date-fns';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AddProduct = () => {
  
    const { register, handleSubmit, formState: { errors } } = useForm();
  
const {user}= useContext(AuthContext)
const date = new Date();
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    
    const { data:categories=[] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/category')
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {

        const image = data.image[0]
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const uri = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {

                    const product = {
                        sellerName: user?.displayName,
                        email: user?.email,
                        name: data?.name,
                        title: data?.title,
                        location: data?.location,
                        original: parseFloat(data?.original),
                        // date: data?.date,
                        time: data?.time,
                        resale: parseFloat(data?.resale),
                        image: imageData.data.url,
                        brand: data?.brand,
                        phone:data?.phone,
                        year: data?.year,
                        date
                    }
                    fetch('http://localhost:8000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Product Add is my Successfully');

                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                }
            })
    }
    return (
        <div>
            <h1 className='text-2xl'>Add Product</h1>
            <div>

                <div className='w-96 p-7'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>

                       
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input placeholder='Product Name' type="text" required {...register("title", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.title && <p role="alert" className='text-red-500'>{errors.title?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file" required {...register("image", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
                        </div>
                        <div className='flex'>
                        <div className="form-control w-full max-w-xs mr-5">
                            <label className="label"><span className="label-text">Date</span></label>
                            <input placeholder='Product Name' type="date" required {...register("date", {required: 'Date is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.date && <p role="alert" className='text-red-500'>{errors.date?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Time</span></label>
                            <input placeholder='Product Name' type="time" required {...register("time", {required: 'Time is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.time && <p role="alert" className='text-red-500'>{errors.time?.message}</p>}
                        </div>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Year</span></label>
                            <input placeholder='Year' type="number" required {...register("year", { required: 'Year is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.year && <p role="alert" className='text-red-500'>{errors.year?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Saller Name</span></label>
                            <input placeholder='Enter Your Name' required type="text" {...register("name", {required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                     <div className='flex'>
                     <div className="form-control w-full max-w-xs mr-5">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input placeholder='Location' type="text" required {...register("location", {required: 'Location is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p role="alert" className='text-red-500'>{errors.location?.message}</p>}
                        </div>
                     
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Brand Name</span></label>
                            <select {...register("brand")} required className="select input-bordered w-full max-w-xs">
                                <option  disabled selected>Select Your Mobile Brand</option>
                                {
                                    categories?.map(categorie =><option key={categorie._id} value={categorie.brand}>{categorie.brand}</option>)
                                }
                            </select>
                        </div>
                        
                     </div>
                     <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Mobile Number</span></label>
                            <input placeholder='Enter Your Mobile Number' required type="text" {...register("phone", { required: 'Phone is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.phone && <p role="alert" className='text-red-500'>{errors.phone?.message}</p>}
                        </div>

                        <div className='flex'>
                            <div className="form-control w-full max-w-xs mr-5">
                                <label className="label"><span className="label-text">Original Price</span></label>
                                <input placeholder='Original Price' type="text" required {...register("original", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                                {errors.original && <p role="alert" className='text-red-500'>{errors.original?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Resale Price</span></label>
                                <input placeholder='Resale Price' type="text" required {...register("resale", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                                {errors.resale && <p role="alert" className='text-red-500'>{errors.resale?.message}</p>}
                            </div>
                        </div>


                        <input className='w-full btn btn-secondary mt-5' value='Add Product' type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;