import React, { useState } from 'react'
import './SellerPage.css'
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import Header from './Header.js'
import Requests from './Requests.js'
import { Link, useNavigate } from 'react-router-dom';
export default function SellerPage() {
    const [{basket,user},dispatch] = useStateValue();
    const [sold,setSold] = useState([]);
    const [bool,setBool] = useState(0);

        const [details,setDetails] = useState([]);
    const [chats,setChats] = useState("");
    
  const timer={
    curDT : new Date().toLocaleString()
    //dei onnu kekanum
  }


const state={
  curDT : new Date().toLocaleString(),
}

const sendChat = (e) =>{
  setChats(e.target.value);
  details.map(detail => {
    if(detail.data.email == user.email){
      db.collection('Service_Chats').doc().set({
        role : "Service Provider",
        email : user.email,
        name : detail.data.name,
        specialization : detail.data.specialization,
        chat  : chats,
        date_n_time : state.curDTs
      })
    }
  })
  
}
    
    const navigate = useNavigate();

    
const [changer,setChanger] = useState(1);

const getData = (e) =>{
  setBool(1);
  if(user){
    console.log(sold)
    db
    .collection('sold_items')
    .doc(user.uid)
    .collection('products')

    .onSnapshot(snapshot => (
        console.log(snapshot),
        setSold(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    ))}else{
            
    }        
  }

  const navHome = (e) =>{
    navigate('/')
  }
const dash=(e)=>{
    e.preventDefault();
    setChanger(1);
}

const chat=(e)=>{
    e.preventDefault();
    setChanger(2);
}

const seller_Req=(e)=>{
    e.preventDefault();
    setChanger(3);
}

  return (
    <div className='seller_page_main'>
      <div className='seller_left'>
       <div className='seller_left_nav'>
        <button onClick={navHome}>DUALKART</button>
       </div>
       <div className='seller_left_nav'>
        <button onClick={dash}>SOLD PRODUCTS</button>
        <br/>
        <button onClick={chat}>ADD PRODUCTS</button>
        <br/>
        <button onClick={seller_Req}>DASHBOARD</button>
       </div>
       <div className='seller_left_revenue'>
        <h2>Total Revenue = ${}</h2>
       </div>
      </div>
      <div className='seller_mid'>
      <div className='seller_top'>
      <div className='seller_welcome_message'>
      <h2>Welcome </h2> 
      </div> 
      </div>
      <div className='seller_center'>
       {changer == 1 ? 
       <div>

      {bool == 0 ? <button onClick={getData}>Get Data</button> :<div>
      <div>
      </div>
      <table className='table_ordered'>
          <tr>
         
          {sold.map(item => (
        <div className='sold_data'>
        <td className='td'><p>{item.data.basket.title}</p></td>
        <td className='td'><p>₹{item.data.basket.price}</p></td>
        </div>
      ))}
          
          {sold.map(item => (
        <div className='sold_data'>
          
        </div>
      ))}
          </tr>
      </table>
     
      </div>  }
    
      </div>
       : changer == 2 ? 


       <div className='seller_request'>
       <Requests />
       </div> 

       : changer == 3 ? 
       <div>
       <input placeholder='Ask Your Queries'/> 
       <button onClick={sendChat}>Send Chat</button>
       </div>
       : null }
      </div>
      <div>
      
      </div>
      </div>
    </div>
  )
}
