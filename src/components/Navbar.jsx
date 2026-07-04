import React from 'react'
import { Button } from '@/components/ui/button';

function Navbar() {
  return (
<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex justify-between items-center p-4 text-foreground">
      {/* Clickable Brand Title navigating back home */}
      <div className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
        <p className='text-2xl'> Eye<span className='text-blue-400'>see</span></p>
      </div>
    
    <div>
      <a href="#shop">Shop</a>
    </div>
    <div>
      <a href="#contact">contact</a>
    </div>
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