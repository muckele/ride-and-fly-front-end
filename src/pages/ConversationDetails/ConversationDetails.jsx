//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import * as convoService from '../../services/convoService'
// import * as messageService from '../../services/messageService'

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
    <div>
      <h2>Conversation</h2>
      <Messages conversation={conversation}/>
      <NewMessage handleSendMessage={props.handleSendMessage} conversationId={conversationId}/>
      
   
    </div> 
  )
}
 
export default ConversationDetails