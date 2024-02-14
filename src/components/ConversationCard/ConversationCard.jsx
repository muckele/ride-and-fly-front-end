//npm modules
import { Link } from 'react-router-dom';
//css
import '../ConversationCard/ConversationCard.css'

const ConversationCard = ( { conversation } ) => {
  return ( 
    <Link to={`/conversations/${conversation._id}`}>

      <div className='conversation'>
        
        <p>To:{conversation.recipient.name}</p>
        <p>From:{conversation.messageAuthor.name}</p>
        
      </div>
    </Link>
    
  )
}
 
export default ConversationCard;