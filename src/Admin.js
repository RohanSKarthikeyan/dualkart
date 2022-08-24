import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {db} from './firebase'


function Admin() {

  const [{productName},dispatch] = useStateValue(); // to send the productName from admin page to add/edit product page

  const navigate= useNavigate();
  const [productsName,setProductsName]=useState([]); //for storing all the products name from db to check 

  useEffect(() => {
    db.collection('products').onSnapshot( snapshot => {
      setProductsName(snapshot.docs.map(doc => ({
        title: doc.data().name,
      })))
    })
  })

  const moveToAddProducts = () => {
    navigate('/addProducts');
  } 

  const moveToJobAssignment = () =>{
    navigate('/assignjob')
  }

  const CheckWhetherAddOrEdit = (e) => {
    e.preventDefault();

    var name=document.getElementById('prod_name').value;
    var isFound=false;

    productsName.map(products => {
      if(products.title == name){
        isFound=true;
      }
    })

    dispatch ({
      type:'ADD_OR_EDIT_PRODUCT_IN_DB',
      productName: name
    })

    if(isFound){
      navigate('/editProducts')
    }else{
      navigate('/addProducts')
    }

  }

  return (
    <div>
        <h1>This is Admin Page</h1>
        
        <div className="addProducts" onClick={moveToAddProducts}>
          <button>Move to Add products</button>
        </div>

        <div className="assignJob" onClick={moveToJobAssignment}>
          <button>Move to Assigning Job</button>
        </div>

        <form onSubmit={CheckWhetherAddOrEdit}>
          <label>Check whether the product is added or not :</label>
          <input type='text' id='prod_name'></input>
          <button>Move to Add/Edit Product</button>
        </form>
    </div>
  )
}

export default Admin