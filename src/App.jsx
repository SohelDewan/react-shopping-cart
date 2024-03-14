import {useEffect, useState } from 'react'

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('./fakeData.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  // console.log(products);
  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          <div className="card">
            <img className='card-img' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></img>
            <h1>fakestoreapi</h1>
            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <div className='card-footer'>
              <h3>35$</h3>
              <button className='add-btn'>
                Add to card
              </button>
            </div>
          </div>
        </div>
        <div className="cart-container">
          <h1>This is cart</h1>
        </div>
      </div>

    </>
  )
}

export default App
