
//components
import MessageCard from '../../components/Message/MessageCard'

//css
import '../Inbox/Inbox.css'

const Inbox = (props) => {


  console.log(props.messages)


  return ( 
    <div>
      <h1>Inbox</h1>
      {props.messages.map((message) => (
        <MessageCard key={message._id} message={message}/>
      ))}
      
    </div>
  )
}
 
export default Inbox