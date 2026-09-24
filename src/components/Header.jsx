import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <h1>logo</h1>
        <ul className='navbar'>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
        </ul>
        <button className='btn'>Cart: {cartCount}</button>
      
    </div>
  )
}

export default Header
