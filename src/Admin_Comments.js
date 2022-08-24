import React, { useState } from 'react'
import { useEffect } from 'react';
import { db } from './firebase';
import ChatCard from './ChatCard';

function Admin_Comments(props) {

    const[chats,setChats] = useState([]);


    useEffect(() => {
        db
        .collection('Service_Chats')  
        .onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                data: doc.data()
            })))
        ))
        console.log(chats)
  },[])

const deleteChat = (e) =>{
    var value = e.target.value;

    
}

    
    
  return (
    <div>
        {chats.map(chat => (
            <ChatCard 
         
                role = {chat.data.role}
                email = {chat.data.email}
                name = {chat.data.name}
                chat = {chat.data.chat}
                specialization = {chat.data.specialization}
                dateTime = {chat.data.date_n_time}
                delete = {deleteChat}
            />
            )
        )}
    </div>
  )
}

export default Admin_Comments