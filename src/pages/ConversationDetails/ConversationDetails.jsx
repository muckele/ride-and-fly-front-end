//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import * as convoService from '../../services/convoService'

//css
import '../ConversationDetails/ConversationDetails.css'
import Messages from "../../components/Messages/Messages"


const ConversationDetails = () => {
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

  return ( 
    <div>
      <h2>Conversation</h2>
      <Messages conversation={conversation}/>
      
   
    </div> 
  )
}
 
export default ConversationDetails