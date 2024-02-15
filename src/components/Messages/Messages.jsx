//components
import MessageCard from "../MessageCard/MessageCard"

const Messages = (props) => {


  if (!props.conversation?.messages) {
    return <div>Loading...</div>;
  }
  
  // console.log(props.conversation);
  // console.log(props.conversation.messages);


  return ( 
    <>
    {props.conversation?.messages.map(message =>
      <MessageCard message={message} key={message._id}/>
    )}
    </>
  )
}
 
export default Messages