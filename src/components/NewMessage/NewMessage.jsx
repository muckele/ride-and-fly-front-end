
//npm modules
import { useState } from "react"


const NewMessage = ({ handleSendMessage, conversationId }) => {
  
  const [messageFormData, setMessageFormData] = useState({text: ''})

  const handleChange = evt => {
    setMessageFormData({...messageFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
   
    handleSendMessage({...messageFormData, conversationId})
    setMessageFormData({text: ''})
  }

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
      <textarea 
        name="text" 
        required
        placeholder="new message..."
        value={messageFormData.text}
        onChange={handleChange}
      />
      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}
 
export default NewMessage