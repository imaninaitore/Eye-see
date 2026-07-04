import React from 'react'
import { Card,CardContent,CardTitle,CardHeader } from './ui/card'
import { Button } from '@base-ui/react'

function ProductCard({id, name, price, category, description, image }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
        <h2>{name}</h2>  
        </CardTitle>
      </CardHeader >
      <CardContent>

      <img src={image} alt={name} width="200" />    

      <p>Price: Ksh. {price}</p>
      <p>{description}</p>
      <p>Category: {category}</p>
      <Button variant='default' size="xs">Add to cart</Button>
      </CardContent>
     </Card>
  )
}

export default ProductCard