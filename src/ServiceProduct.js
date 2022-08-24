import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Product.css"
import { useStateValue } from './StateProvider';

const service = ""
function ServiceProduct(props) {

    const navigate = useNavigate();
   

const navLap = () =>{
  
    navigate('/laptop');
}

const navDraw = ()=>{

    navigate('/art')
}

const navFood = () =>{

}

  return (
    <div className="product">
        <div className="product__info">

            <h1>{props.title}</h1>

            <p className='product__price'>
                <strong>{props.price}</strong>
            </p>

            <div className='product__rating'>
                {Array(props.rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>

            </div>

            <img src={props.image}></img>

            {props.service==="laptop" ? <button onClick={navLap} value={props.service}>Book Now</button> : props.service==="draw" ? 
            <button onClick={navDraw} value={props.service}>Book Now</button> : <button onClick={navFood} value={props.service}>Book Now</button>}    

    </div>

  )
}

export default ServiceProduct
export {service}