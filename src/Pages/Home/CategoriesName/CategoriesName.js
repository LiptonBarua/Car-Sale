import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategorieCard from './CategorieCard';


const CategoriesName = () => {
    const {data: categories=[]} = useQuery({
        queryKey: ['categories'],
        queryFn: async()=>{
            const res=await fetch('http://localhost:8000/category')
            const data= res.json();
            return data;
        }
    })
    return (
        <div className='my-10'>
            <h1 className='text-2xl text-center mb-6'> Category Name</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                categories.map(categorie=><CategorieCard key={categorie._id} categorie={categorie}></CategorieCard>)
            }
            </div>
        </div>
    );
};

export default CategoriesName;