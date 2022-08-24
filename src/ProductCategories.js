import React from 'react'
import './ProductCategories.css'
import {Link,useNavigate} from 'react-router-dom'

function ProductCategories(props) {

  const navigate= useNavigate() ; 

  const navigateToProducts = () => {
    navigate("/"+props.title)
  }
    
    return (
    <div className="product" onClick={navigateToProducts}>
      <div className="product__info">
        <h1>{props.title}</h1> 
      </div>
      <img src={props.image}></img>
      </div>
  )
}

export default ProductCategories