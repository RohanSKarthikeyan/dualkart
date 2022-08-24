import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import JobCard from './JobCard';
import { useStateValue } from './StateProvider';
import './ServiceManPage.css'



function ServiceManPage() {
    const [{user},dispatch] = useStateValue();
//     const [details,setDetails] = useState([]);
//     const [chat,setChat] = useState("");
    
  //   useEffect(() => {
  //     console.log(user.email)
  // },[])

  // db
  //       .collection('Registered_Employees')  
  //       .onSnapshot(snapshot => (
  //           setDetails(snapshot.docs.map(doc => ({
  //               data: doc.data()
  //           })))
  //       ))
//   const timer={
//     curDT : new Date().toLocaleString()
//     //dei onnu kekanum
//   }

// const setBusy = (e) => {
//     db.collection('Registered_Employees').doc(user.email).update({
//       status : "busy",
     
//   })
// }

// const setAvailable = (e) => {
//     db.collection('Registered_Employees').doc(user.email).update({
//       status : "free",
//       job : ""
//   })
// }

// const state={
//   curDT : new Date().toLocaleString(),
// }

// const sendChat = () =>{
//   details.map(detail => {
//     if(detail.data.email == user.email){
//       db.collection('Service_Chats').doc().set({
//         role : "Service Provider",
//         email : user.email,
//         name : detail.data.name,
//         specialization : detail.data.specialization,
//         chat  : chat,
//         date_n_time : state.curDT
//       })
//     }
//   })
  
// }
    


const saveChat = (e) => {
  console.log(user.uid)
}



  return (
    <div className='service_page_main'>
      <div className='service_left'>
      <div className='service_left_nav'>
      <button onClick={saveChat}>DASHBOARD</button>
      <button>DASHBOARD</button>
      <button>DASHBOARD</button>
      </div>
      <div className='service_left_revenue'>
    
      </div>
      </div>
      <div className='service_top'> 
        
      </div>
    </div>
  )
}

export default ServiceManPage