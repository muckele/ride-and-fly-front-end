
//css
import '../MessageCard/MessageCard.css'

const MessageCard = ({ message }) => {
  return ( 
    <div className='message-card'>
      {message.text}
    </div>
  )
}

export default MessageCard