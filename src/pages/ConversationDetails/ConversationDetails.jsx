//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import * as convoService from '../../services/convoService'

//css
import '../ConversationDetails/ConversationDetails.css'


const ConversationDetails = (props) => {
  const { conversationId } = useParams()
  const [conversation, setConversation] = useState([])
  const [newMessage, setNewMessage] = useState('')

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
      
   
    </div> 
  )
}
 
export default ConversationDetails