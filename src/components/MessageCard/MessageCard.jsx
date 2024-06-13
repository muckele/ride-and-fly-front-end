//css
import '../MessageCard/MessageCard.css'

const MessageCard = ({ message }) => {
  return ( 
    <div className='message-card'>
      <span>{message.text}</span>
    </div>
  )
}

export default MessageCard