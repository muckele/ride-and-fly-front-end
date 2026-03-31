import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../ConversationCard/ConversationCard.css'

const ConversationCard = ({ conversation, user }) => {
  const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    if (conversation.createdAt) {
      const date = new Date(conversation.createdAt)
      const options = { month: 'long', day: 'numeric', year: 'numeric' }
      setFormattedDate(date.toLocaleDateString('en-US', options))
    }
  }, [conversation.createdAt])

  const senderName = user.profile === conversation.messageAuthor?._id
    ? 'Me'
    : conversation.messageAuthor?.name
  const recipientName = user.profile === conversation.recipient?._id
    ? 'Me'
    : conversation.recipient?.name
  const latestMessage = conversation.messages?.[conversation.messages.length - 1]
  const previewText = latestMessage?.text?.length > 84
    ? `${latestMessage.text.slice(0, 84)}...`
    : latestMessage?.text || 'Open the conversation to view messages.'

  return (
    <article className='conversation-card'>
      <Link to={`/conversations/${conversation._id}`} className="conversation-card__link">
        <div className="conversation-card__topline">
          <span className="conversation-card__participants">{senderName} to {recipientName}</span>
          <span className="conversation-card__date">{formattedDate}</span>
        </div>
        <p className="conversation-card__preview">{previewText}</p>
      </Link>
    </article>
  )
}

export default ConversationCard
