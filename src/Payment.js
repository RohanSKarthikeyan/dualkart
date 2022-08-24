import React from 'react'
import Product from './CheckOutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import Header from './Header'
import { useState,useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import {Link,useNavigate } from 'react-router-dom'
import { CardElement } from '@stripe/react-stripe-js'
import { useStripe } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'
import axios from './axios';
import { db } from './firebase'

function Payment() {

    const [{basket,user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const[succeeded, setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [clientSecret,setClientSecret]= useState(true);

    const [amount,setAmount] = useState();


    const navigate=useNavigate();

    useEffect(() => {
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                url : `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
            
        }

        getClientSecret();
    }, [basket])
    console.log("the client secret is >> ", clientSecret);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);
        

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent is nothing but payment confirmation
            
            db.collection('users').doc(user.uid).collection('orders').doc().set({
                basket : basket,
                amount : paymentIntent.amount,
                created: paymentIntent.created
            });

            basket.map(item =>{
                db.collection('sold_items').doc(item.seller_id).collection('products').doc().set({
                    basket : item,
                    amount : paymentIntent.amount,
                    created: paymentIntent.created,
                    seller_id : item.seller_id
                });    
            })

        //     basket.map(item =>{
        //         db
        // .collection('Registered_Sellers')
        // .onSnapshot(snapshot => (
        //     setAmount(snapshot.docs.map(doc => ({
        //         amount  : doc.data().earnings
        //     })))
        // ))
        //     })



            //   basket.map(item =>{
            //      db
            //     .collection('Registered_Sellers')
            //     .doc(item.seller_id)
            //     .onSnapshot(snapshot => (
            //         console.log(snapshot),
            //         setSellerDetails(snapshot.docs.map(doc => ({
            //             id: doc.id,
            //             data: doc.data()
            //         })))
            //     ))
            //     })

            //     basket.map(item =>{
            //     db.collection('Registered_Sellers').doc(item.seller_id).update({
            //       earnings: amount+item.amount
            //   });
            // })
    
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch ({
                type:'EMPTY_BASKET'
            })
            
            navigate("/Orders", { replace: true });
        })
    }

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

  return (
    <div className='payment_page'>
    <Header />
    <div className='payment_head'>
        <h3>
            CHECK OUT ITEMS ({basket.length})
        </h3>
        </div>
        <div className='payment'>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment_address'>
                <p>{!user ? '' : user.email}</p>
                <p>6/83,V.0.C Street, S.R.V Nagar,</p>
                <p>Thirunagar,Madurai -6.</p>
            </div>
        </div>

        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review Items <br/> and Delivery</h3>
            </div>
            <div className='payment_item'>
                {basket.map(item =>{
                    return(
                        <Product 
                            id= {item.id}
                            title= {item.title}
                            price= {item.price}
                            rating= {item.rating}
                            image = {item.image}
                        />
                    );
                })}
            </div>
        </div>

        <div className='payment_section'>
            <div className='payment_title'>
            <h3> Payment Method </h3>
            </div>
            <div className='payment_details'>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                        <div>
                            <CurrencyFormat
                            renderText={(value) => (
                            <h3>Order Total : {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} 
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                            {processing ? <p>processing</p> : 'Buy Now'}
                            </button>
                        </div>
                        {/* displaying the errors */}
                        {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Payment