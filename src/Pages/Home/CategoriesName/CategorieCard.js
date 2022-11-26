import React from 'react';
import { Link } from 'react-router-dom';

const CategorieCard = ({ categorie }) => {
    const {_id, image, brand} = categorie;
    console.log(categorie)
    return (
       <div>
          <div className="card card-compact h-[74%] shadow-xl">
        <figure><img className='' src={image} alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
        <Link to={`/product/${brand}`} className='text-xl'>{brand}</Link>
        </div>
      </div>
       </div>
    );
};

export default CategorieCard;