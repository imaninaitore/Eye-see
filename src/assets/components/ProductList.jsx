import React from 'react'
import { useState,useEffect,useContext } from 'react'
import ProductCard from './ProductCard';
import ProductsSearch from './ProductsSearch';
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from '@/assets/components/ui/dialog';
import { CartContext } from '@/context/CartContext';
import Cart from './Cart';
import { Button } from '@/assets/components/ui/button';

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
const [isOpen, setIsOpen] = useState(false);
  
const cartItemCount = cart?.length || 0;

    return (
   <div className=" bg-gradient-to-r from-blue-700/40 via-slate-600/30 to-blue-700/40 backdrop-blur-xl border border-white/10 shadow-2xl">

 <div >
      <h2 className=" text-center text-slate-800 text-3xl sm:text-2xl md:text-5xl lg:text-6xl  py-6 px-6">SHOP</h2>

 <ProductsSearch onSearch = {handleSearch}/>
    <p>showing results for: <strong>{searchTerm || "All items"}</strong></p>

{/* Cart Modal System (Using Dialog) */}
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button className="relative">
      Cart

      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
          {cartItemCount}
        </span>
      )}
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
      <Cart onCheckout={() => setIsOpen(false)} />
    </div>
  </DialogContent>
</Dialog>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {filteredProducts.length === 0 ? (
        <p>No products match your search </p>
      ):(

        filteredProducts.map((product) => (

         <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
            />
        
        ))
        )}
        </div>
        
      
    </div>
    </div>
 );
}
export default ProductList;