//components
import MessageCard from "../MessageCard/MessageCard"
import './Messages.css'

const Messages = (props) => {
  if (!props.conversation?.messages) {
    return <div className="messages-empty">Loading...</div>
  }
  if (!props.conversation.messages.length) {
    return <div className="messages-empty">No messages yet. Send the first one below.</div>
  }

  return ( 
    <div className="messages-list">
      {props.conversation.messages.map((message) => (
        <MessageCard message={message} key={message._id} user={props.user} />
      ))}
    </div>
  )
}

export default Messages
