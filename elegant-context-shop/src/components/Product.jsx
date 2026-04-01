import React, { useContext } from "react";
import { CartContext } from "../store/cartContext";

/* --------------------------------------------------------
Product component - The product box showing one item. It 
    contains the image of the product, the title name, 
    product price and its description. Below this, we have
    the add to cart button that calls the context method.

  - context > addToCart used
-------------------------------------------------------- */

const Product = ({ id, image, title, price, description }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => addToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;
