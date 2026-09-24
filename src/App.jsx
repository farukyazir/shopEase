import React, { useState } from 'react'
import Header from './components/header'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import products from './data/productData'
import "./App.css";
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
