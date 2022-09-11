import React from 'react'
import { useState,useStateValue,useEffect } from 'react'
import { db } from './firebase'
import Header from './Header';
import ServicesComponent from './ServicesComponent';

function Art() {
  return (
    <div>
    <Header />
   <div>
   <ServicesComponent
       image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
       title = "ART WORKS"
       titlecontent = "Book your service here and get the thing back on track!!"
       available = "TheService is available everyday from 9 A.M to 4 P.M"
       min = "300"
       mindays = "3"
       additional1 = ""
       additional2 = ""
       additional3 = ""
       service_name = "laptop"
   />
   <h1>Hello</h1>
   </div>
   </div>
  )
}

export default Art