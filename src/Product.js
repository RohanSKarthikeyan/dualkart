import React,{useEffect, useState} from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
import {db} from './firebase'

function Product({props},hideButton) {

  const [{basket,user},dispatch] = useStateValue();
  
  var local_qty=0;

  var isTaken=null;

  const addtoBasket =  () => {

   
    //  db.collection('users').doc(user.uid).collection('products_loc_qty').doc(props.data.id).onSnapshot((snapshot) => {
    //   var qty= snapshot.data().loc_qty;
    //   isTaken = snapshot.data().loc_qty;
    
      
    // console.log(qty);
    
    //   if(props.quantity >= local_qty ){
    
    //    console.log(local_qty,props.id,user.uid);
    
    //    local_qty=++qty;

    //   db.collection('users').doc(user.uid).collection('products_loc_qty').doc(props.id).update({
    //     loc_qty: local_qty
    //   })   

      
      
    //   }
    // })
    
    dispatch({
      type : 'ADD_TO_BASKET',
      item : {
        id: props.id,
        title: props.data.name,
        price: props.data.price,
        rating: props.data.rating,
        image:props.data.image,
        quantity: 1,
        seller_id:props.data.seller_id
      }
  })

  }

  return (
    <div className="product">
        <div className="product__info">

            <h2>{props.data.name}</h2>

            <h1 className='product__price'>
                <strong>₹{props.data.price}</strong>
            </h1>

            <div className='product__rating'>
                {Array(props.data.rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
          

            </div>

            <img src={props.data.image}></img>

            {(props.data.quantity>0 ) ? <button onClick={addtoBasket} >Add To Basket</button> : 'The product is currently out of stock ' }       

    </div>

  )
}
  

export default Product