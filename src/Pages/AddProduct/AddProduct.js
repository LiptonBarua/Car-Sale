import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selected, setSelected] =useState(new Date())
    const imgHostKey = process.env.REACT_APP_imgbb_key;


    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/categorie')
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
                        name: data?.name,
                        title: data?.title,
                        location: data?.location,
                        original: data?.original,
                        resale: data?.resale,
                        image: imageData.data.url,
                        brand: data?.brand
                    }
                   fetch('http://localhost:8000/product',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                   })
                   .then(res=>res.json())
                   .then(data=>{
                    toast.success(`${data.title} is my Successfully`);
                   
                   })
                   .catch(error=>{
                    console.log(error.message)
                   })
                }
            })
    }
    return (
        <div>

            <div>
            <h1 className='text-2xl'>Add Product</h1>
                <div className='w-96 p-7'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file" {...register("image", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input placeholder='Product Name' type="text" {...register("title", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.title && <p role="alert" className='text-red-500'>{errors.title?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Brand Name</span></label>
                            <select {...register("brand")} className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Select Your Mobile Brand</option>
                                {
                                    categories?.map(categorie=><option key={categorie._id} value={categorie.name}>{categorie.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Saller Name</span></label>
                            <input placeholder='Enter Your Name' type="text" {...register("name", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input placeholder='Enter Your Location' type="text" {...register("location", { required: 'Location is Required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p role="alert" className='text-red-500'>{errors.location?.message}</p>}
                        </div>

                        <div className='flex'>
                            <div className="form-control w-full max-w-xs mr-5">
                                <label className="label"><span className="label-text">Original Price</span></label>
                                <input placeholder='Original Price' type="text" {...register("original", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
                                {errors.original && <p role="alert" className='text-red-500'>{errors.original?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Resale Price</span></label>
                                <input placeholder='Resale Price' type="text" {...register("resale", { required: 'Name is Required' })} className="input input-bordered w-full max-w-xs" />
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