import React,{useState,useEffect} from 'react'
import "./Home.css";
import ProductCategories from './ProductCategories';
import Header from './Header';
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'

function Home() {
  const [{basket,user},dispatch] = useStateValue();
  useEffect(()=>{
    console.log(user);
  },[user])

  return (
    <div className='main_service'>
    <Header />
    <div className="Service_page">
        <div classname="home__container">
            <img className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

<div className="home__row_service">
          <ProductCategories
            title="Books"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
           <ProductCategories
            title="HomeAppliances"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
            <ProductCategories
            title="Gadgets"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>

        <div className="home__row_service">
    
        <ProductCategories
            title="SportsEquipments"
            image="https://m.media-amazon.com/images/I/811LCtNnHfL._AC_SX522_.jpg"
          />
        <ProductCategories
            title="Groceries"
            image="https://m.media-amazon.com/images/I/A1LUBcx1U-L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default Home;