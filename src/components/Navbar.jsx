import React, { useContext } from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className="sticky top-0 z-50 w-full border-b bg-slate-700/95 backdrop-blur supports-backdrop-filter:bg-slate-700/60 flex justify-between items-center p-4 text-white">
      {/* Clickable Brand Title navigating back home */}
      <div className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
        <p className='text-2xl'> Eye<span className='text-blue-400'>see</span></p>
      </div>
    
     <div>
     <Link to={'/'}>
      <a href="#home" className="hover:text-cyan-400 transition duration-300">Home</a>
     </Link>
    </div>

     <div>
     <Link to={'/shop'}>
      <a href="#shop" className="hover:text-cyan-400 transition duration-300">Shop</a>
     </Link>
    </div>
   
   
   <Link>
   <div>
    <Link to={'/footer'}>
     <a href="#contact" className="hover:text-cyan-400 transition duration-300">contact</a> 
    </Link>
    </div>
   </Link>
    
          <div className="flex items-center gap-3 pl-2 border-l border-muted text-sm font-medium">
            <Button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              Login
            </Button>

            <Button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              sign up 
            </Button>
          </div>
</nav>
 
)
}

export default Navbar