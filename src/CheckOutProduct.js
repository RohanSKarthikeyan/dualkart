import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
import './CheckOutProd.css';

function Product({id,title,price,rating,image,quantity,showButton}) {

    const [{basket},dispatch] = useStateValue();

    function removefrombasket(){

        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })

    }

  return (
    <div className="check_product">
    <img className='check_img' src={image}></img>
        <div className="check-product__info">

            <strong><p>{title}</p></strong>

            <p className='check-product__price'>
                <strong>${price}</strong>
            </p>

            <div className='check-product__rating'>
                {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>

            {/* <strong><p>items: {quantity}</p></strong> */}

            { showButton ? <button onClick={removefrombasket} className='remove_button' >Remove From Basket</button>: ''}
        </div>             

    </div>

  )
}

export default Product