//css
import '../MessageCard/MessageCard.css'

const MessageCard = ({ message, user }) => {
  const messageAuthorId = typeof message.messageAuthor === 'string'
    ? message.messageAuthor
    : message.messageAuthor?._id
  const isCurrentUser = user?.profile === messageAuthorId
  const authorName = isCurrentUser ? 'You' : message.messageAuthor?.name || 'Ride partner'
  const formattedTime = message.createdAt
    ? new Date(message.createdAt).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : ''

  return ( 
    <article className={`message-card ${isCurrentUser ? 'message-card--outgoing' : 'message-card--incoming'}`}>
      <div className="message-card__meta">
        <span className="message-card__author">{authorName}</span>
        {formattedTime && <time className="message-card__time">{formattedTime}</time>}
      </div>
      <p className="message-card__text">{message.text}</p>
    </article>
  )
}

export default MessageCard
