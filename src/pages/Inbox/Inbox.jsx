
//components
import ConversationCard from '../../components/ConversationCard/ConversationCard'

//css
import '../Inbox/Inbox.css'

const Inbox = (props) => {

  console.log(props.user.profile);
  const userConversations = props.conversations.filter(conversation =>
    conversation.participants.includes(props.user.profile)
  );
  
  return ( 
    <div className='inbox-container'>
      <h1>Inbox</h1>
      {userConversations.map((conversation) => (
        <ConversationCard key={conversation._id} conversation={conversation}/>
      ))}
      
    </div>
  )
}
 
export default Inbox