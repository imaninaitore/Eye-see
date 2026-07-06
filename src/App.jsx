import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import ProductList from './components/ProductList'
import Header from './components/Header'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

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