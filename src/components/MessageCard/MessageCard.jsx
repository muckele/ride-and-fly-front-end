//css
import '../MessageCard/MessageCard.css'

const MessageCard = ({ message }) => {
  return ( 
    <div className="message">
      <p>To:{message.recipient.name}</p>
      <p>From:{message.messageAuthor.name}</p>
      <p>Text: {message.text}</p> 
    </div>
   )
}
 
export default MessageCard