import React from 'react'
import checkoutad from './images/checkout.jpg';
import './CheckOut.css';
import Product from './Product';
import { useStateValue } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';
import Header from './Header';
import Subtotal from './Subtotal';

function CheckOut() {

  const [{basket,user},dispatch] = useStateValue();
  return (
    <div>
    <Header/>
    <div className='checkout'>
      <div className='checkoutleft'>
      <img className='checkoutad' src={checkoutad}/>
      <div>
        <h2>Hello {user? user.email:'Guest'}</h2>
      <h2 className='checkouttitle'>Your Shopping Basket</h2>
      {basket.map(item =>{
          return(
          <CheckOutProduct 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            quantity={item.quantity}
            showButton
          />
          )
        })}
      </div>

      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
    </div>
  )
}

export default CheckOut