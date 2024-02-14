//npm modules
import { Link } from 'react-router-dom'

//css
import '../MessageCard/MessageCard.css'

const MessageCard = ({ message }) => {
  return ( 
    <Link to={`/conversations/${message._id}`}>
      <div className="message">
        <p>To:{message.recipient.name}</p>
        <p>From:{message.messageAuthor.name}</p>
        <p>Text: {message.text}</p> 
      </div>
    </Link>
   )
}
 
export default MessageCard