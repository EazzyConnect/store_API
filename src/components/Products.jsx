import React from 'react';
import './Products.css';

const Products = ({ image, title, price, description, category, rating }) => {
 return (
  <>

   <div id='productContainer'>

    <div id='productContainerTop'>
     <img src={image} alt="img" />
     <h1>{title}</h1>
    </div>

    <div id='productContainerBottom'>
     <h3>${price}</h3>
     <h5>{description}</h5>
     <p>{category}</p>
     <p>{rating}</p>
    </div>

   </div>

  </>
 )
};

export default Products;