import React from 'react'
import { useState } from 'react'
import './Login.css'
import AmazonLogo from './images/Amazon_logo.png'
import { db,auth } from './firebase'
import { Link, useNavigate } from 'react-router-dom';
import {useStateValue} from "./StateProvider";

function Userdetails(){

   const [username,setUserName]=useState('');
   const [mobile,setMobile]=useState('');
   const [address,setAddress]=useState('');

   const[{user},dispatch]=useStateValue();
   const navigate=useNavigate();

   const registerdetails = () => {
      db.collection('user_info').doc(user.email).set({
         email:user.email,
         username:username,
         mobile:mobile,
         address:address
      })

      navigate('/')
}

return(
<div className='login_div'>
    <div className='logo_div'>
    <Link to="/"><img className='header_img' src={AmazonLogo}/></Link>
    </div>
       <div className='login_box'>
            <h1>
                Register Details
            </h1>
            <div className='input_div'>
               <label><strong>UserName</strong></label><br/>
               <input type="text" value={username} onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className='input_div'>
               <label><strong>Mobile Number</strong></label><br/>
               <input type="text" value={mobile} onChange={e => setMobile(e.target.value)}/>
            </div>
            <div className='input_div'>
               <label><strong>Address</strong></label><br/>
               <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
            </div>
                
                <p>By continuing, you agree to xxx's Conditions <br/>a of Use and Privacy Notice.
                We're a friendly, <br/>industry-focused community of developers</p>
                <button type="submit" onClick={registerdetails} className='newacc_button'>Register Your Details</button>
         </div>
    </div>
)
}

export default Userdetails;