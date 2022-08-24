import React from 'react'
import { useState } from 'react';
import './JobCard.css'

function JobCard(props,serviceman) {

 

  return (
    <div className='jobcard_main'>
    <div className='JobCard'>
    <div className='service_man_img'>
    <img className='serviceman_img' src='https://imgs.search.brave.com/ge4zYITm29IcVihcIqvHAAEXXIFIAlqn4BWQfd3kVa8/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbHVjaWQtZ2Vu/ZXJpYy8yNC9Vc2Vy/X3BlcnNvbl9hdnRh/cl9wcm9maWxlX3Bp/Y3R1cmVfZHAtNTEy/LnBuZw'/>
    </div>
        <h3>
            NAME: <small>{props.name}</small>
            <br/>
            ROLE : <small>{props.role}</small>
            <br/>
        </h3>
        <h4>

        <table>
          <tr>
            <td>
            MOBILE :
            </td>
            <td>
            {props.number}
            </td>
          </tr>

          <tr>
            <td>
            EMAIL : 
            </td>
            <td>
            {props.email}
            </td>
          </tr>

          <tr>
            <td>
            ADDRESS :
            </td>
            <td>
            {props.address}
            </td>
          </tr>

          <tr>
            <td>
            AGE :
            </td>
            <td>
            {props.age}
            </td>
          </tr>

          <tr>
            <td>
            AVAILABILITY :
            </td>
            <td>
            {props.availability}
            </td>
          </tr>

          <tr>
            <td>
            SPECIALIZATION :
            </td>
            <td>
            {props.specialization}
            </td>
          </tr>

          <tr>
            <td>
            BLACKLISTED :
            </td>
            <td>
            {props.blacklist}
            </td>
          </tr>
        </table>
        </h4>
        <br/>
        {props.role == "Service Provider" ?  <div className='condn_div'>
          <input placeholder='Job Description' onChange={props.handleChange}/>
          <br/>
          <button value={props.email} disabled={props.availability == 'busy'} onClick={props.handleAssign}>ASSIGN JOB</button>
          <br/>
          <button onClick={props.handleRemove} value={props.email}>REMOVE EMPLOYEE</button>
          <button onClick={props.handleAdd} value={props.email}>ADD EMPLOYEE</button>
        </div> : <div className='condn_div'>
          <button disabled={props.availability == 'busy'} onClick={props.setBusy}>MAKE ME UNAVAILABLE</button>
          <br/>
          <button disabled={props.availability == 'free'} onClick={props.setAvailable}>MAKE ME AVAILABLE!!</button>

        </div>}
    </div>
    </div>
  )
  
}

export default JobCard