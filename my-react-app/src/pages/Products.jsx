import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductsList";
import Loading from "../components/Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  // Query Parameters
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 5;
  const sort = searchParams.get("sort") || "price";
  const order = searchParams.get("order") || "asc";
  const filter = searchParams.get("filter");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
          {
            params: {
              page,
              limit,
              sort,
              order,
              filter,
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, sort, order, filter]);

  return (
    <div>
      <h1>Products</h1>
      {loading ? <Loading /> : <ProductList products={products} />}
    </div>
  );
}

export default Products;
