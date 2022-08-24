import React, { useState } from 'react'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

function SellerLogin() {
    const[{user,service},dispatch] = useStateValue();

    const navigate = useNavigate();

    const[empName,setName] = useState("");
    const[number,setNum] = useState("");
    const[age,setAge] = useState("");
    const[address,setAddr] = useState("");



const handleSubmit = (e) =>{
    e.preventDefault();
    db.collection('Registered_Sellers').doc(user.uid).set({
        name : empName,
        number : number,
        email : user.email,
        age : age,
        address : address,
        seller_id: user.uid,
        earnings : 0
    })
    
     navigate('/sellerpage')
}

const notSignedIn = () =>{
  navigate('/login')
}



  return (
    <div>
    <Header/>
    <div className='outer_emp_div'>
    <div className='first_img_div'>
      
      <h1>SELLER'S<br/> REGISTRATION PAGE!!</h1>
      <p>Do you want to your goods here?</p>
      <button>Learn More</button>
      <img className='full_img'
      src='https://static.acer.com/up/Resource/Acer/Laptops/Swift_3X/Overview/20201007/Swift_3X_lifestyle_01_large.jpg'/>
    </div>


    <div className='Employee_main_div'>
     <div className='form_div'>
     <h1>
       Register Yourself
    </h1>
     <div className='input_div'>
    <input placeholder='name' type="required" onChange={e => setName(e.target.value)} />
     </div>
     <div className='input_div'>
    <input placeholder='number' type="required" onChange={e => setNum(e.target.value)}/>
     </div>
     <div className='input_div'>
    <input placeholder='Age' type="required" onChange={e => setAge(e.target.value)}/>
     </div>
     <div className='input_div'>
     <input placeholder='Address' type="required" onChange={e => setAddr(e.target.value)}/>
     </div>
    <div className='input_div'>
    <p>If you are specialized in servicing electronics or doing art works, mention them.</p>
        <p>Or else mention as others. We will contact you and update the specialization!!</p>
        <p>If you are not Signed in yet, Sign in yourself!!</p>
     </div>
       <div className='input_div'> 
       {user==null ? <button onClick={notSignedIn} >Sign In Yourself!!</button> : <button onClick={handleSubmit}>Register Yourself!!</button>}
       </div>
       </div>
     </div>

    <div className='mid_design_div'>
   

{/* =================================================== */}
</div>
    
     </div>
     </div>
  )
}

export default SellerLogin



{/* <div className='info_div1'>
<div className='img_div'>
      <img src='https://images.unsplash.com/photo-1636000791622-09ff7beeeb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'/>
      <div className='text_div_emp'>
  <h1 >
    ELECTRONICS
  </h1>
  <p>YOU CAN WORK BY SERVICING<br/>ELECTRONIC GOODS</p>
  <button>Learn More..</button>
 </div>
</div>

</div>





<div className='info_div1'>
<div className='img_div'>
  <img src='https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
  <div className='text_div_emp'>
  <h1>
    ART WORKS
  </h1>
  <p>YOU CAN WORK BY DOING<br/>ART WORKS FOR MONEY</p>
  <button>Learn More..</button>
 </div>
</div>

</div>



<div className='info_div1'>
<div className='img_div'>
  <img src='https://images.unsplash.com/photo-1624811072711-3e3481f355fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=303&q=80'/>
  <div className='text_div_emp'>
  <h1>
    OTHERS
  </h1>
  <p>HAVE ANYOTHER TALENT?<br/>NO PROBLEM!!</p>
  <button>Learn More..</button>
 </div>
</div>

</div> */}