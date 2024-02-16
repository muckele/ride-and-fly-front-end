//components
import MessageCard from "../MessageCard/MessageCard"

const Messages = (props) => {


  if (!props.conversation?.messages) {
    return <div>Loading...</div>;
  }
  


  return ( 
    <>
    {props.conversation?.messages.map(message =>
      <MessageCard message={message} key={message._id}/>
    )}
    </>
  )
}
 
export default Messages