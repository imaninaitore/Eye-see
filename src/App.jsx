import React from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/footer'
import ProductList from './assets/components/ProductList'
import Header from './assets/components/Header'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <CartProvider>
      <ProductList/>
    </CartProvider>
    <Footer/>
    </>
  )
}

export default App