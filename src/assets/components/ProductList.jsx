import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from './ProductCard';
import ProductsSearch from './ProductsSearch';

function ProductList() {
  const [products, setProducts] = useState([]);
  
const [searchTerm, setSearchTerm]= useState ('')

const handleSearch =(searchInputValue) =>{
setSearchTerm(searchInputValue)
}

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
)

    return (
     <div>
         <h2>Product List</h2>
<ProductsSearch onSearch = {handleSearch}/>
    <p>showing results for: <strong>{searchTerm || "All items"}</strong></p>
     {filteredProducts.map((product) => (
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

export default ProductList;