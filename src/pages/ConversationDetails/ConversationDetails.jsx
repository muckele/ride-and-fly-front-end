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

  useEffect(() => {
    const fetchConvo = async () => {
      const data = await convoService.showConvo(conversationId)
      setConversation(data)
    }
    fetchConvo()
  }, [conversationId])

  if (!conversation) return <h1>Loading...</h1>
  return ( 
    <div className="conversation-page">
      <h1>Conversation</h1>
      <div className="conversation-feed">
        <Messages conversation={conversation}/>
      </div>
      <div className="new-message">
        <NewMessage handleSendMessage={props.handleSendMessage} conversationId={conversationId}/>
      </div> 
      
    </div> 
  )
}

export default ConversationDetails