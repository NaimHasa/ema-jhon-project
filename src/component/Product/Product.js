import React from 'react';
import './Product.css'
const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-detelis'>
        <div className='product-dtl'>
          <h1>Product Name: {name}</h1>
          <h2>Price: ${price}</h2>
          <p>Manufacturer: {seller}</p>
          <p><small>Rating: {ratings} </small></p>
        </div>
        <button onClick={() => props.handleAddToCart(props.product)} className='btn'>
          <h1>Add to cart</h1>
        </button>
      </div>
    </div>
  );
};

export default Product;