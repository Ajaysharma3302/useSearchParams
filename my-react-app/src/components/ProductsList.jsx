import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

function ProductList({products }) {
  return (
    <>
    
  
    
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </>
    )

}
ProductList.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
export default ProductList;
