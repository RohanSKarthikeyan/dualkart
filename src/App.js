import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from 'react-router-dom';
import CheckOut from "./CheckOut.js";
import Home from "./Home.js";
import Login from "./Login.js";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';
import Payment from "./Payment.js";
import ServicePage from './ServicePage.js'
import Orders from './Orders.js'
import Admin from './Admin.js'
import AddProducts from './AddProducts'
import EditProducts from './EditProducts'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Laptop from "./Laptop.js";
import AssignJob from "./AssignJob.js";
import EmployeeAdder from "./EmployeeAdder.js";
import ServiceManPage from "./ServiceManPage.js";
import Requests from "./Requests"
import Admin_Comments from "./Admin_Comments.js";
import ServiceMain from "./ServiceMain.js";
import Art from "./Art.js";
import RequestDisplay from "./RequestDisplay.js"
import Books from './Books.js'
import SellerPage from "./SellerPage.js";
import OrderedItemsSeller from "./OrderedItemsSeller.js";
import SellerLogin from "./SellerLogin.js";
import HomeAppliances from "./HomeAppliances.js"
import Userdetails from "./Userdetails.js"
import Speechtest from "./Speechtest.js"

const promise = loadStripe('pk_test_51LRVptSIX2MbRnIWCEIa36Z2ZbLKwQ6y2qzR6cgReySOW3QLgUMUEnLA2SSO3AF81QpRMY57M4Ca80JqOWavY0aa00MidFhtIV');

export default function App(){

    const[{basket,user,service},dispatch]=useStateValue();

    useEffect(() => {
        //loads only once i.e. only when app reloads 

        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);

            if(service){
                dispatch({
                    type : "REGISTERED_USER",
                    email : user.email
                })
            }else{
                
            }

            if(authUser){
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            }
            else{
                dispatch({
                    type:'SET_USER',
                    user: null
                })
            }
        })
    },[])

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div classname="app">
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/checkout" element={<CheckOut/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/payment' element={<Elements stripe={promise}><Payment/></Elements>} />
                <Route exact path='/service' element={<ServicePage />} />
                <Route exact path='/orders' element={<Orders />} />
                <Route exact path='/service' element={<ServicePage />} />
                <Route exact path='/admin' element={<Admin/>}/>
                <Route exact path='/addProducts' element={<AddProducts/>}/>
                <Route exact path='/editProducts' element={<EditProducts/>}/>
                <Route exact path='/assignjob' element={<AssignJob />}/>
                <Route exact path='/employee' element={<EmployeeAdder />}/>
                <Route exact path='/serviceman' element={<ServiceManPage />}/>
                <Route exact path='/sellerrequests' element={<Requests/>}/>
                <Route exact path='/adminchats' element={<Admin_Comments/>}/>
                <Route exact path='/laptop' element={<Laptop />}/>
                <Route exact path='/art' element={<Art/>}/>
                <Route exact path='/requestdisplay' element={<RequestDisplay/>}/>
                <Route exact path='/Books' element={<Books/>}/>
                <Route exact path='/sellerpage' element={<SellerPage/>}/>
                <Route exact path='/ordered' element={<OrderedItemsSeller/>}/>
                <Route exact path='/sellerlogin' element={<SellerLogin/>}/>
                <Route exact path='/HomeAppliances' element={<HomeAppliances/>}/>
                <Route exact path='/userdetails' element={<Userdetails/>}/>
                <Route exact path='/speechtest' element={<Speechtest/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}