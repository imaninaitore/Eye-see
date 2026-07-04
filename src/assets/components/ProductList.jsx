import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

    return (
     <div>
     {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default ProductList