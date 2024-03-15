import {useEffect, useState } from 'react'

import './App.css';
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // TODO: getting an array

  useEffect(()=>{
    fetch('./fakeData.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  // console.log(products);
  const handleCart = (p)=>{
    const isExist = cart.find(item => item.id === p.id);
      if(!isExist){
        setCart([...cart, p]);
      }
      // setCart([p]); // [] is given for getting all products in an array
      else{
        alert("Cart item already exists");
      }
    }
  
  // console.log(cart);
  const handleDelete = (id)=>{
    // console.log(id);
    const newCart = cart.filter(item=> item.id != id);
    setCart(newCart);
  }
  return (
    <>
    <h1 className='title'>Your products your choice </h1>
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
          <div>
            {
              cart.map((item, index)=> (
                <div className='cart-info'>
                <h3>{index+1}</h3>
                <h3>{item.title.slice(0,10)}</h3>
                <h4>{item.price}</h4>
                <button onClick={()=>handleDelete(item.id)}>-Del</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
