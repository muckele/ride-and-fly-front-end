//components
import ConversationCard from '../../components/ConversationCard/ConversationCard'
//css
import '../Inbox/Inbox.css'


const Inbox = (props) => {
  const userConversations = props.conversations.filter((conversation) => (
    conversation.participants?.some((participant) => {
      const participantId = typeof participant === 'string' ? participant : participant?._id
      return participantId === props.user.profile
    })
  ))

  return (
    <main className='inbox-container'>
      <div className="inbox-header">
        <p className="inbox-eyebrow">Messaging</p>
        <h1>Inbox <i className="ri-mail-fill"></i></h1>
        <p className="inbox-subtitle">
          Keep your ride-share plans in one place and pick up the conversation from any device.
        </p>
      </div>

      <div className="inbox-list">
        {userConversations.length ? userConversations.map((conversation) => (
          <ConversationCard
            key={conversation._id}
            conversation={conversation}
            user={props.user}
          />
        )) : (
          <div className="inbox-empty">
            <p>No conversations yet.</p>
            <p>Start with a post and your messages will show up here.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Inbox
