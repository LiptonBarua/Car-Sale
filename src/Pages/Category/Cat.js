import React from 'react';
import { useLoaderData } from 'react-router-dom';

const cat = () => {
    const products= useLoaderData();
    console.log(products)
    return (
        <div>
            <h1>this is a cat</h1>
        </div>
    );
};

export default cat;