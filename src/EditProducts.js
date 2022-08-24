import React,{useEffect} from 'react'
import {db} from './firebase'
import { useStateValue } from './StateProvider'

function EditProducts() {

  const [{productName},dispatch] = useStateValue();
  var quantity_present_already=0,id,image,rating;

  useEffect(() => {

    if(productName){
     
      document.getElementById('prod_name').value = productName;

      db.collection('products').doc(productName).onSnapshot(snapshot =>(
        document.getElementById('prod_price').value = snapshot.data().price,
        quantity_present_already = snapshot.data().quantity
      ))

    }

  },[])

  const handleSubmit= () => {

    var final_quantity = quantity_present_already + parseFloat(document.getElementById('prod_quantity').value)

    db.collection('products').doc(document.getElementById('prod_name').value)
    .update({
    name: document.getElementById('prod_name').value,
    price: parseFloat(document.getElementById('prod_price').value),
    quantity: final_quantity,
  });
    
  dispatch({
    type:'ADD_OR_EDIT_PRODUCT_IN_DB',
    productName: null
  })

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
      <label>Product Price:</label><br/>
      <input type="text" id="prod_price" required></input>
      </div>
      <div className="AddProductsProps">
      <label>Product Quantity to be added:</label><br/>
      <input type="number" id="prod_quantity" required></input>
      </div>
      
      <button className="AddProductsButton">Add To DataBase</button>
      
    </form>
  </div>
  )
}

export default EditProducts