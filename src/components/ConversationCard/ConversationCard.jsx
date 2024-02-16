//npm modules
import { Link } from 'react-router-dom';
//css
import '../ConversationCard/ConversationCard.css'

const ConversationCard = ( { conversation , user} ) => {

  

  return ( 

    <div className='conversation-card'>
      <Link to={`/conversations/${conversation._id}`}>
        
        <p>Created: {conversation.createdAt}</p>
        <p>From:{(user.profile === conversation.messageAuthor._id) ? "Me" : conversation.messageAuthor.name}</p>
        <p>To: {(user.profile === conversation.recipient._id) ? "Me" : conversation.recipient.name}</p>
      
      </Link>
    </div>

  )
}
 
export default ConversationCard;