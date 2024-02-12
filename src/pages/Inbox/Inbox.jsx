
//npm modules
import { useState, useEffect } from 'react'



//css
import '../Inbox/Inbox.css'

const Inbox = (props) => {


  console.log(props.messages)


  return ( 
    <div>
      <h1>Inbox</h1>
      {props.messages.map((message) => (
        <>
          <p key={message._id}>Text: {message.text}</p> 
          <p> {message.recipient.name}</p>
        </>
      ))}
      
    </div>
  )
}
 
export default Inbox