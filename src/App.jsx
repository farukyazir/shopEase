import React, { useState } from 'react'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import products from './data/productData'
import "./App.css";
import Header from './components/Header'
const App = () => {
  const[cartCount,setcartCount]= useState(0);


  return (
    <div className='main-container'>
      <Header cartCount={cartCount}/>
      <Banner/>
      <div className='card'>
        {
        products.map((data)=>(
          <ProductCard key={data.id} data={data} setcartCount={setcartCount} cartCount={cartCount}/>

        ))
      }
      </div>
      
      
    </div>
  )
}

export default App
