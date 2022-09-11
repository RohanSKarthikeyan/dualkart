import React,{useEffect} from 'react'
import {db} from './firebase'
import { useStateValue } from './StateProvider'
import './AddProducts.css'

function AddPoducts() {

  const [{productName},dispatch] = useStateValue();

  useEffect(() => {
    if(productName){

      document.getElementById('prod_name').value = productName;
      dispatch({
        type: 'ADD_OR_EDIT_PRODUCT_IN_DB',
        productName: null
      })
    }
  },[])

  const handleSubmit = (e) => {

    e.preventDefault();

    db.collection('products').doc(document.getElementById('prod_name').value)
    .set({
    name: document.getElementById('prod_name').value,
    id: document.getElementById('prod_id').value,
    price: parseFloat(document.getElementById('prod_price').value),
    rating: parseInt(document.getElementById('prod_rating').value),
    quantity: parseInt(document.getElementById('prod_quantity').value),
    image: document.getElementById('prod_image').value});

    alert('product added to database');

    document.getElementById('prod_name').value='';
    document.getElementById('prod_id').value='';
    document.getElementById('prod_price').value='';
    document.getElementById('prod_rating').value='';
    document.getElementById('prod_quantity').value='';
    document.getElementById('prod_image').value='';

  }

  return (
    <div>
      <h2>AddProducts</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="AddProductsProps">
          <label>Product Name:</label><br/>
          <input type="text" id="prod_name" required></input>
        </div>
        <div className="AddProductsProps">
          <label>Product Unique Id:</label><br/>
          <input type="text" id="prod_id" required></input>
        </div>
        <div className="AddProductsProps">
        <label>Product Price:</label><br/>
        <input type="text" id="prod_price" required></input>
        </div>
        
        <div className="AddProductsProps">
        <label>Product Quantity:</label><br/>
        <input type="number" id="prod_quantity" required></input>
        </div>
        <div className="AddProductsProps">
        <label>Product Image Link:</label><br/>
        <input type="text" id="prod_image" required></input>
        </div>
        
        <button className="AddProductsButton">Add To DataBase</button>
        
      </form>
    </div>
  )
}

export default AddPoducts