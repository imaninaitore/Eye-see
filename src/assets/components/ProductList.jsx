import React from 'react'
import { useState,useEffect,useContext } from 'react'
import ProductCard from './ProductCard';
import ProductsSearch from './ProductsSearch';
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@base-ui/react';
import { CartContext } from '@/context/CartContext';
import Cart from './Cart';


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

//cart variables
const {cart} = useContext(CartContext);
  const cartItemCount = cart?.length || 0;
  const [isOpen, setIsOpen] = useState(false);
  
    return (
{/* Cart Modal System (Using Dialog) */}
       <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-9 w-9 border bg-secondary/50">
              <ShoppingCart className="h-4 w-4 text-foreground" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-primary-foreground animate-in fade-in zoom-in-95 duration-200">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md max-h-[85vh] flex flex-col p-6 overflow-hidden">
            <DialogHeader className="border-b pb-4">
              <DialogTitle className="flex justify-between items-center text-xl">
                <span>Shopping Cart</span>
                <span className="text-xs font-normal text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                  {cartItemCount} items
                </span>
              </DialogTitle>
              <DialogDescription>
                Review or manage items added to your marketplace selection.
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto">
              <Cart onCheckout={()=> setIsOpen(false)}/>
            </div>
          </DialogContent>
        </Dialog>
        
  )
}

export default ProductList;