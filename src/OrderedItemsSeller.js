import React from 'react'
import { useStateValue } from './StateProvider'
import { useState,useEffect } from 'react'
import { db } from './firebase';

function OrderedItemsSeller() {
    const [{basket,user},dispatch] = useStateValue();
    const [sold,setSold] = useState([]);

  
  return (
    <div>
  
    </div>
  )
}

export default OrderedItemsSeller