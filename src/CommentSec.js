import React from 'react'
import './CommentSec.css'

function CommentSec(props) {
  return (
    <div className='comment_main'>
   
    <div className='comment_div'>
      <div className='comment_name'>
        <h3>{props.name}</h3>
      </div>
      <br/>
      <div className='content_div'>
      <div className='comment_content'>
        <h4>{props.comment}</h4>
      </div>
      
      <div className='comment_content'>
      <p>{props.rating}</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default CommentSec