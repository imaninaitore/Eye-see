import React, { useState } from 'react'

function ProductsSearch({onSearch}) {
 const [query,setQuery] = useState(''); //setting a hook to update on given data

 const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query)
 }

 return (
    <div>
      <form onSubmit={handleSubmit} className='p-4 border rounded'>
        <input type="text"
         value={query} 
         onChange={(e) => setQuery(e.target.value)}
         placeholder='Search eye wear...'
         className='p-2 border'
         />
         <button type='submit' className='ml-2 bg-black text-white p-2 '>Search</button>
      </form>
    </div>
  )
}

export default ProductsSearch