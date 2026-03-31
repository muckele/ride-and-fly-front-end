
//npm modules
import { useState } from "react"
import './NewMessage.css'


const NewMessage = ({ handleSendMessage, conversationId }) => {
  
  const [messageFormData, setMessageFormData] = useState({text: ''})

  const handleChange = evt => {
    setMessageFormData({...messageFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    await handleSendMessage({...messageFormData, conversationId})
    setMessageFormData({text: ''})
  }

  return ( 
    <div className="new-message-box">
      <form onSubmit={handleSubmit} className="new-message-form">
        <textarea
          name="text"
          required
          placeholder="Write your message..."
          value={messageFormData.text}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default NewMessage
