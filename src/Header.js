import React, { useState,useEffect } from 'react'
import './Header.css';
import AmazonLogo from './images/white-amazon-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth, db} from "./firebase";
import { useSpeechSynthesis } from 'react-speech-kit'


export default function Header() {
  
  const {speak, voices} = useSpeechSynthesis();

    

  const test = () => {
      speak({text:'vanakam'})
  }

  const navigate = useNavigate();

  const [{basket,user},dispatch] = useStateValue();
  const [details,setDetails] = useState([]);
  const [sellerdetails,setsellerDetails] = useState([]);

  var service = false;


  
  useEffect(() => {
    
    db
    .collection('Registered_Sellers')  
    .onSnapshot(snapshot => (
        setsellerDetails(snapshot.docs.map(doc => ({
            data: doc.data()
        })))
    ))
    
    db
    .collection('Registered_Employees')  
    .onSnapshot(snapshot => (
        setDetails(snapshot.docs.map(doc => ({
            data: doc.data()
        })))
    ))
},[])


  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }else{
      navigate('/Login')
    }
  }

  const basketnav = () =>{
    navigate('/checkout');
    speak({text:'vanakam'})
  }

  const ordersPageNav = () => {
    navigate('/orders');
  }

  const sellerNav = () =>{
    console.log(service)
    sellerdetails.map(seller => {
      console.log(user.email)
      if(user!=null){
      if(seller.data.email==user.email){
        service = true
        
      }else{
    
      }
    }
     
    })
  
   
      if(service){
       navigate('/sellerpage')
      }else{
         navigate('/sellerlogin')
      }
  }

  const servicePageNav = () =>{
    navigate('/service')
  }

  return (

    <div className='header_div'>

      <Link to='/'>  <img className='header_img' src={AmazonLogo}/> </Link>
      
      <div className='search_div'>
        <input className='search_div_input'/>
        Hello
      </div>

      <div className='header_nav'>
        <div className='header_option' onClick={handleAuthentication}>
       <span><small> Hello {user ? user.email:'Guest'}</small></span>
       <span>{user?'SignOut':'  SignIn'}</span>
      </div>

      
      
      <div onClick={ordersPageNav} className='header_option'>
       <span><small>Returns And</small></span>
       <span>Orders</span>
      </div>
      
      <div className='header_option'>
       <span><a className='toCheck' onClick={servicePageNav}><small> Book </small></a></span>
       <span> Service </span>
      </div>

      <div className='header_option'>
       <span><a className='toCheck' onClick={basketnav}><small > BASKET</small></a></span>
       <span>{basket.length}</span>
      </div>

      <div className='header_option'>
       <span><a className='toCheck' onClick={sellerNav}><small > Seller </small></a></span>
       <span>Login</span>
      </div>

      </div>
      
    </div>
  )
}

