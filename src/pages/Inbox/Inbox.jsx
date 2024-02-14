
//components
import ConversationCard from '../../components/ConversationCard/ConversationCard'

//css
import '../Inbox/Inbox.css'

const Inbox = (props) => {


  return ( 
    <div className='inbox-container'>
      <h1>Inbox</h1>
      {props.conversations.map((conversation) => (
        <ConversationCard key={conversation._id} convo={conversation}/>
      ))}
      
    </div>
  )
}
 
export default Inbox