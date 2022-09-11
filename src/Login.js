import React from 'react'
import { useState } from 'react'
import './Login.css'
import Logo from './images/Fradel & Spies.png'
import { db,auth } from './firebase'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

   const navigate= useNavigate() ;   //use "useNavigate" instead of "useHistory" as it is depricated from react-router
   const [email,setEmail]=useState(''); 
   const [password,setpassword]=useState('');
   

   const signIn = e => {
      e.preventDefault();   
      auth.signInWithEmailAndPassword(email,password).then((auth) => {
         if(auth){
            navigate('/');
         }
      }).catch((error) => {alert(error.message)});
   }

   const register = e => {
      e.preventDefault();
   
      auth.createUserWithEmailAndPassword(email,password).then((auth) => {
         console.log(auth);
         if(auth){
            navigate('/userdetails')
         }
      }).catch((error) => {alert(error.message)});

   }

  return (
    <div className='login_div'>
    <div className='logo_div'>
    <Link to="/"><img className='login_logo' src={Logo}/></Link>
    </div>
       <div className='login_box'>
            <h1>
                Sign in
            </h1>
            <div className='input_div'>
               <label><strong>Email</strong></label><br/>
               <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='input_div'>
               <label><strong>Password</strong></label><br/>
               <input type="password" value={password} onChange={e => setpassword(e.target.value)}/>
            </div>
                <button type="submit" onClick={signIn} className='signin_button'>SIGN IN</button>
                
                <p>By continuing, you agree to xxx's Conditions <br/>a of Use and Privacy Notice.
                We're a friendly, <br/>industry-focused community of developers</p>
                
                <button type="submit" onClick={register} className='newacc_button'>CREATE A NEW ACCOUNT</button>
         </div>
    </div>
  )
}

export default Login