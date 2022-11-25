import React from 'react';
import { Link } from 'react-router-dom';

const CategorieCard = ({ categorie }) => {
    const {_id, image, name } = categorie;
    return (
        <div className="card card-compact h-[74%] shadow-xl">
        <figure><img className='' src={image} alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
        <Link to={`/category/${_id}`} className='text-xl'>{name}</Link>
        </div>
      </div>
    );
};

export default CategorieCard;