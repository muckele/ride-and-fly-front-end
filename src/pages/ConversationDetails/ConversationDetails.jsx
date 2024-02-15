//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import * as convoService from '../../services/convoService'

//css
import '../ConversationDetails/ConversationDetails.css'

//components
import Messages from "../../components/Messages/Messages"
import NewMessage from "../../components/NewMessage/NewMessage"


const ConversationDetails = (props) => {
  const { conversationId } = useParams()
  const [conversation, setConversation] = useState([])
  // const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    const fetchConvo = async () => {
      const data = await convoService.showConvo(conversationId)
      setConversation(data)
    }
    fetchConvo()
  }, [conversationId])

  // const handleSendMessage = async (messageFormData) => {
  //   const newMessage = await messageService.createMessage(messageFormData)
  //   setConversation([ ...conversation, messages: [...conversation.messages, newMessage]])
  //   // navigate('/inbox')
  // }

  return ( 
    <div>
      <h2>Conversation</h2>
      <Messages conversation={conversation}/>
      <NewMessage handleSendMessage={props.handleSendMessage} conversationId={conversationId}/>
      
   
    </div> 
  )
}
 
export default ConversationDetails