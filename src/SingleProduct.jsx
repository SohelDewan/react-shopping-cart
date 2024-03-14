// import React from "react";

const SingleProduct = ({product, handleCart}) => {
    console.log(handleCart);
  return (
    <div>
      <div className="card">
        <img
          className="card-img"
          src={product.image}
        ></img>
        <h1>{product.title}</h1>
        <p>
          {product.description}
        </p>
        <div className="card-footer">
          <h3>{product.price}$</h3>
          <button onClick={(e)=>handleCart(product)} className="add-btn">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
