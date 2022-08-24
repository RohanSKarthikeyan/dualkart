import React from 'react'
import  './SellerProductDisplay.css'
import {db} from './firebase'

function SellerProductDisplay(props) {

    const handleAcceptRequest = (e) => {

        e.preventDefault();

        if( document.getElementById('product_category').value ){

            var prod_cat=document.getElementById('product_category').value;

            db.collection('products').doc(prod_cat).collection('product_id').doc().set({
                name: props.title,
                seller_id: props.seller_id,
                price: props.price,
                rating: props.rating,
                quantity: props.quantity,
                image: props.image,
                category:prod_cat
            });

            db.collection('seller_requests').doc(props.id).delete();

        }
        else{
            alert('Please Fill The Required Fields ')
        }
        
    }

    const handleDeclineRequest = (e) => {

        e.preventDefault();

        db.collection('seller_requests').doc(props.id).delete();
    }

  return (
    <div className="product">
        <div className="product__info">

            <p>{props.title}</p>

            <p>Seller id: {props.seller_id}</p>

            <label>Fill the Category for the Product: </label><input type="text" id="product_category" required></input>

            <p className='product__price'>
                <strong>${props.price}</strong>
            </p>

            <div className='product__rating'>
                {Array(props.rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
          

            </div>

            <img src={props.image}></img>

            <button onClick={handleAcceptRequest}>Accept Request</button> <button onClick={handleDeclineRequest}>Decline Request</button>      

    </div>

  )
}

export default SellerProductDisplay