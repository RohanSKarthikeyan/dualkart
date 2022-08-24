import React, { useEffect } from 'react'
import Header from './Header.js'
import ServiceProduct from './ServiceProduct.js'
import './ServicePage.css'
import { useStateValue } from './StateProvider.js';

function ServicePage() {
  const [{basket,user},dispatch] = useStateValue();

  return (

    
    <div className='main_service'>
    <Header />
    <div className="Service_page">
        <div classname="home__container">
            <img className="home__image"
             src="https://imgs.search.brave.com/kaWFYUccGhFvyLkYKb5Hb3rAKIUQhepqNus2bV8zyq4/rs:fit:1033:424:1/g:ce/aHR0cHM6Ly93d3cu/Z2Vla2VyaWVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy9wcmltZS12/aWRlby1hbWF6b24u/cG5n"
          alt=""
        />

<div className="home__row_service">
<ServiceProduct
            title="Service Your Electronic Devices Here And Get Them Working!!"
            price="Starts from RS.500"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            service = "laptop"
          />
           <ServiceProduct
            title="Bad At Art?? Book Your Service And Get Your Work Done!!"
            price="Starts from RS.200"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            service = "draw"
          />
        </div>

        <div className="home__row_service">
    
        <ServiceProduct
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            service = "draw"
          />
     <ServiceProduct
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            service = "draw"
          />
      <ServiceProduct
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            service = "laptop"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServicePage

