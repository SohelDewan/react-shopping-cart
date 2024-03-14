import {useEffect, useState } from 'react'

import './App.css';
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('./fakeData.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  // console.log(products);
  const handleCart = (p)=>{
    console.log(p);
  }
  return (
    <>
    <h2 className='text-5xl text-center'>Your choice your products</h2>
      <div className="main-container">
        <div className="cards-container">
        {
          products.map(myMap =><SingleProduct product={myMap} handleCart={handleCart}></SingleProduct> )
        }
          
        </div>
        <div className="cart-container">
          <h1 className='text-center text-3xl'>This is cart</h1>
          <div className='cart-title-price'>
            <h3>Title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
