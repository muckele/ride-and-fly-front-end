//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import * as convoService from '../../services/convoService'


const ConversationDetails = (props) => {
  const { conversationId } = useParams()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    const fetchConvo = async () => {
      const data = await convoService.showConvo(conversationId)
      setMessages(data)
    }
    fetchConvo()
  }, [conversationId])

  return ( 
    <div>
      <h2>Conversation</h2>
      {props.messages.map(message => (
        <p key={message._id}>{message.text}</p> 
      ))}
      {/* <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button> */}
    </div> 
  )
}
 
export default ConversationDetails