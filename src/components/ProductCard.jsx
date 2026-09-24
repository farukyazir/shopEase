import React, { useState } from 'react'

const ProductCard = ({data,setcartCount,cartCount}) => {
  const [Isclicked,setIsClicked]=useState(true)
  function addToCart(){
    setcartCount(cartCount+1)
    setIsClicked(false)
  }
  function removeFromCart(){
    setcartCount(cartCount-1)
    setIsClicked(true)
  }
  return (
    <div className='productCard'>
        <img src={data.image}/>
        <h4>{data.name}</h4>
        <h6>{data.price}</h6>
        {
          Isclicked? <button onClick={addToCart}>Add to cart</button>:<button onClick={removeFromCart}>Remove from cart</button>
        }      
    </div>
  )
}

export default ProductCard
