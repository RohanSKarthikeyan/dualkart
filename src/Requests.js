import React from 'react'
import {db} from './firebase'
import { useStateValue } from './StateProvider';
import './Requests.css'

function Requests() {

  const [{basket,user},dispatch] = useStateValue();

    const handleSubmit = (e) => {

        e.preventDefault();
    
        db.collection('seller_requests').doc().set({
        name: document.getElementById('prod_name').value,
        seller_id: user.uid,
        price: parseFloat(document.getElementById('prod_price').value),
        rating: parseInt(document.getElementById('prod_rating').value),
        quantity: parseInt(document.getElementById('prod_quantity').value),
        image: document.getElementById('prod_image').value});
    
        alert('product added to database');
    
        document.getElementById('prod_name').value='';
        
        document.getElementById('prod_price').value='';
        document.getElementById('prod_rating').value='';
        document.getElementById('prod_quantity').value='';
        document.getElementById('prod_image').value='';
    
      }
    
      return (
        <div>
          <h2>REQUEST TO ADD PRODUCT </h2>
          <div className='req_form_div'>
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                <label>Product Name:</label>
                </td>
                <td>
                <input type="text" id="prod_name" required></input>
                </td>
              </tr>

              <br/>

              <tr>
                <td>
                <label>Seller Unique id:</label>
                </td>
                <td>
                <input type="text" id="seller_id" value={user?user.uid:'Please login to continue'} disabled></input>
                </td>
              </tr>

              <br/>

              <tr>
                <td>
                <label>Product Price:</label>
                </td>
                <td>
                <input type="text" id="prod_price" required></input>
                </td>
              </tr>

              <br/>

              <tr>
                <td>
                <label>Product Rating:</label>
                </td>
                <td>
                <input type="number" id="prod_rating" required></input>
                </td>
              </tr>

              <br/>

              <tr>
                <td>
                <label>Product Quantity:</label>
                </td>
                <td>
                <input type="number" id="prod_quantity" required></input>
                </td>
              </tr>

              <br/>

              <tr>
                <td>
                <label>Product Image Link:</label>
                </td>
                <td>
                <input type="text" id="prod_image" required></input>
                </td>
              </tr>

              <br/>
              
              <tr>
              {user && <button className="add_prod">REQUEST TO ADD PRODUCT</button>}
              </tr>
            </table>
          </form>
          </div>
          </div>
  )
}

export default Requests