import React from 'react'
import './ChatCard.css'

function ChatCard(props) {
  return (
    <div className='chat_main'>
    <img src='https://imgs.search.brave.com/IJqzJc4ouHdI-qk34IitHz90HNajNS4xXNSmsDYHGi0/rs:fit:700:350:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvckV3/RnJpQ2tmQXRqT2I1/Yi0yM2I0dEdHVmN1/dmZhQnFhbVlOSnJn/eG5MTS5wbmc_d2lk/dGg9NzAwJmF1dG89/d2VicCZzPWI5Y2I1/MmYwYTc1YzE0YTJh/NGYwZGRhODMzODJh/NTI1YWVhMzZiMjc'/>
    <div className='chat_div'>
    <div className='chat_top_div'>
    <div className='chat_p_div'>
    <p>{props.name}</p>
    </div>
      <div className='chat_p_div'>
      <p>{props.role}</p>
      </div>
    </div>    
    <div className='content_div'>
    {props.chat}
    </div>
    <div className='chat_bottom_div'>

      <div className='chat_p_div'>
      <p>{props.dateTime}</p>
      </div> 
      
      <div className='chat_p_div'>
      <button value={props.email} onClick={props.delete}>Clear</button>
   </div> 

   <div className='chat_p_div'>
    <p>{props.email}</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ChatCard