import React,{useEffect,useState} from 'react'
import {db} from './firebase'
import Product from './Product'
import './Books.css'
import Header from './Header'

function Books() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
 
        db
        .collection('products')
        .doc('Books')
        .collection('product_id')
        .onSnapshot(snapshot => (
            console.log(snapshot),
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

  })

  console.log(products)

  const addtoBasket = () => {

  }
    
  return (
    <div className='main_service'>
    <Header />
    <div className="home__row">
    {products.map(product => (
      <Product props={product} />
  ))}
  </div>
  </div>
  
  )
}

export default Books