
//components
import MessageCard from '../../components/MessageCard/MessageCard'

//css
import '../Inbox/Inbox.css'

const Inbox = (props) => {


  return ( 
    <div className='inbox-container'>
      <h1>Inbox</h1>
      {props.messages.map((message) => (
        <MessageCard key={message._id} message={message}/>
      ))}
      
    </div>
  )
}
 
export default Inbox