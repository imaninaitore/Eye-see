import React from 'react'
import { Card,CardContent,CardTitle,CardHeader } from './ui/card'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({id, name, price, category, description, image }) {
  
   const{cart,setCart} = useContext(CartContext);

const handleAddToCart = () =>{
  const productPayload = {id,name,price}
  setCart([...cart,productPayload]);
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>
        <h2>{name}</h2>  
        </CardTitle>
      </CardHeader >
      <CardContent>

   <Link to={`/product/${id}`}>
     <img src={image} alt={name} width="200" />    
   </Link>

      <p>Price: Ksh. {price}</p>
      <p>{description}</p>
      <p>Category: {category}</p>
      <Button onClick={handleAddToCart} variant='default' size="xs">Add to cart</Button>
      </CardContent>
     </Card>
  )
}

export default ProductCard