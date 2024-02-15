
//npm modules
import { useState } from "react"
import { useParams } from "react-router-dom"

const NewMessage = ({ handleSendMessage, conversationId}) => {
  
  const [MessageformData, setMessageFormData] = useState({text: ''})

  const handleChange = evt => {
    setMessageFormData({...MessageformData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
   
    handleSendMessage({...MessageformData, conversationId})
    console.log({...MessageformData, conversationId});
    setMessageFormData({text: ''})
  }

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
      <textarea 
        name="text" 
        required
        placeholder="new message..."
        value={MessageformData.text}
        onChange={handleChange}
      />
      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}
 
export default NewMessage