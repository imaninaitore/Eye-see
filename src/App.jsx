import React from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/footer'
import ProductList from './assets/components/ProductList'
import Header from './assets/components/Header'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import ProductDetails from './assets/components/ProductDetails'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Route path='/product/:productId' element={<ProductDetails/>}/>
    <Header/>
      <ProductList/>
    <Footer/>
    </Router>
    
    </>
  )
}

export default App