import React,{useState,useEffect} from 'react'
import "./RequestDisplay.css";
import SellerProductDisplay from './SellerProductDisplay';
import Header from './Header';
import {db} from './firebase';
import { useStateValue } from './StateProvider'

function Home() {

  const[products,setProducts] = useState([]);
  const [{basket,user},dispatch] = useStateValue();
  var loc_qty=0;

  useEffect(() => {
    db.collection('seller_requests').onSnapshot( snapshot => {
      setProducts(snapshot.docs.map(doc => ({
        title: doc.data().name,
        id: doc.id,
        price: doc.data().price,
        quantity: doc.data().quantity,
        rating: doc.data().rating,
        image: doc.data().image,
        seller_id: doc.data().seller_id
         }
         )))
    })

    

  })



  return (
    <div>
      <Header/>
    <div className="home">
        <div classname="home__container">

          <div className="home__row">
            {
              products.map(product => (
                <SellerProductDisplay 
                id={product.id}
                title={product.title}
                seller_id={product.seller_id}
                price={product.price}
                quantity={product.quantity}
                rating={product.rating}
                image={product.image}
                />
              ))
            }
          </div>
      </div>
    </div>
    </div>
  );
  
}

export default Home;