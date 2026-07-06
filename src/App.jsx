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
      
      <Routes>
      <Route path='/' element={
        <>
          <Header/>
         <ProductList/>
         <Footer/>
        </>
      }/>
      <Route path='/shop' element={
        <>
       <ProductList/> 
       <Footer/>
        </>
       }
      />

      <Route path='/product/:productId' element={<ProductDetails/>}/>
      <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App