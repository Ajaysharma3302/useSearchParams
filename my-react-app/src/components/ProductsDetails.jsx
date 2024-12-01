

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const  ProductsDetails = ()=>{
const {id} = useParams();
const [product,setProducts] = useState([])
const [loading,setLoading] = useState(false)

useEffect(()=>{
    const FetchProductsDetails = async ()=>{
        setLoading(true)
        try {
            const response = await axios.get(" https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/products")
            setProducts(response.data)
        
        } catch (error) {
            console.error("Error fetching product details", error);
        }
     
    }
    FetchProductsDetails()
},[id])

return(
    <>
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        product && (
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        )
      )}
    </div>
    </>
)

}

export default ProductsDetails