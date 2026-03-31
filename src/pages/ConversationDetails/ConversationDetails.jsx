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
  const [conversation, setConversation] = useState(null)

  const refreshConversation = async () => {
    const data = await convoService.showConvo(conversationId)
    setConversation(data)
  }

  useEffect(() => {
    const fetchConvo = async () => {
      const data = await convoService.showConvo(conversationId)
      setConversation(data)
    }

    fetchConvo()
  }, [conversationId])

  const handleSendMessage = async (messageFormData) => {
    await props.handleSendMessage(messageFormData)
    await refreshConversation()
  }

  if (!conversation) return <main className="conversation-page"><h1>Loading...</h1></main>

  const messageAuthorId = typeof conversation.messageAuthor === 'string'
    ? conversation.messageAuthor
    : conversation.messageAuthor?._id
  const recipientId = typeof conversation.recipient === 'string'
    ? conversation.recipient
    : conversation.recipient?._id
  const otherParticipantName = props.user?.profile === messageAuthorId
    ? conversation.recipient?.name
    : conversation.messageAuthor?.name
  const messageCount = conversation.messages?.length ?? 0

  return (
    <main className="conversation-page">
      <section className="conversation-panel">
        <div className="conversation-header">
          <p className="conversation-eyebrow">Direct Message</p>
          <h1>Conversation with {otherParticipantName || 'your ride partner'}</h1>
          <p className="conversation-subtitle">
            {messageCount} {messageCount === 1 ? 'message' : 'messages'} in this thread.
            {recipientId ? ' Replies stay attached to this ride-share conversation.' : ''}
          </p>
        </div>

        <div className="conversation-feed">
          <Messages conversation={conversation} user={props.user} />
        </div>

        <div className="new-message">
          <NewMessage handleSendMessage={handleSendMessage} conversationId={conversationId} />
        </div>
      </section>
    </main>
  )
}

export default ConversationDetails
