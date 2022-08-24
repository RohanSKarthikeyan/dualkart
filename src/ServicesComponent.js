import React, { useEffect, useState } from 'react'
import './ServicesComponent.css'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import Order from './Order';
import CommentSec from './CommentSec';
import './ServicesComponent.css'

function ServicesComponent(props) {


const navigate = useNavigate();

const [{user},dispatch] = useStateValue();
const [comments,setComments] = useState([]);

useEffect(()=>{
    db.collection('Commented_Users').onSnapshot(snapshot => {
        setComments(snapshot.docs.map(doc =>({
           data: doc.data()
        })))
    })
})





function handleBook(e){
    e.preventDefault();
    var details = {
        name: document.getElementById('userName').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value,
        issue: document.getElementById('issue').value,
        suggestions: document.getElementById('suggestion').value,
        };
    
      db.collection('User_Bookings').doc().set({details: details,
        email : user.email
    });
    
        alert('product added to database');
}

const hanldlePost = (e) =>{
    e.preventDefault();

        const comment = document.getElementById('comment_input').value
        const rating = document.getElementById('rating').value

    db.collection('Commented_Users').doc().set({
        user: user.email,
        comment : comment,
        rating : rating,
        service : props.service_name
    })
    alert('Comment Posted');
}



const handleSign = (e) => {
    navigate('/login');
}

  return (
    <div>
    <div className='ServiceComp'>
        <div className='Service_image'>
            <img src={props.image} />
        </div>
        <div className='Service_info'>
            <div className='Service_title'>
                <h1>{props.title}</h1>
                <p>{props.titlecontent}</p>
            </div>
            <div className='Service_details'>

                <table>
                    <tr>
                        <td>
                        <strong>Availability</strong> 
                        </td>
                        <td>
                        <p>{props.available}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <strong>Price</strong>
                        </td>
                        <td>
                        <p>Minimum Rs.{props.min} and maximum it depends.</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <strong>Delay</strong>
                        </td>
                        <td>
                        <p>Minimum {props.mindays} and maximum days depends upon the difficulty</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <strong>Distance</strong>
                        </td>
                        <td>
                        <p>We take laptops all around Madurai</p>
                        </td>
                    </tr>
                </table>

               
                
                
               
            </div>
            <div className='service_additonals'>
                <h3>About the Service</h3>
                <ul>
                    <li><p>{props.additional1}</p></li>
                    <li><p>{props.additional2}</p></li>
                    <li><p>{props.additional3}</p></li>
                    <li><p>{props.additional4}</p></li>
                    <li><p>{props.additional5}</p></li>
                </ul>
            </div>
            <div className='User_details'>
            <h1>Book Your Service Here</h1>
            <table>
                <tr>
                    <td>
                    <label>Name :</label> 
                    </td>
                    <td>
                    <input id="userName" ></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    <label>Address :</label> 
                    </td>
                    <td>
                    <input id="address" ></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    <label>Mobile :</label> 
                    </td>
                    <td>
                    <input id="mobile" ></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    <label>Issue :</label> 
                    </td>
                    <td>
                    <input id="issue" ></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    <label> Add ons :</label> 
                    </td>
                    <td>
                    <input id="suggestion" ></input>
                    </td>
                </tr>
                <br/>                
            <button onClick={handleBook}>Book Now</button> 
            </table>          
        </div>
        </div>
    </div>
    <div>
    <div className='comment_input'>
        <h1>
            Enter Your Comment
        </h1>
            <form>
            <input id='comment_input' placeholder='Enter Comment'/>
            <br/>
            <input placeholder='rating' id='rating' type=''/>
            {user!==null ?  <button onClick={hanldlePost}>Post Comment</button> : <button onClick={handleSign}>Post Comment</button>}
            </form>
        </div>
     <div className='comment_output'>
     <h1>VIEW RELATED COMMENTS</h1>
        {comments.map(comment =>(
            comment.data.service == props.service_name ? <CommentSec
                name = {comment.data.user}
                comment = {comment.data.comment}
                rating = {comment.data.rating}
            /> : null
        ))}
     </div>
        </div>
    </div>
  )
}
   
export default ServicesComponent