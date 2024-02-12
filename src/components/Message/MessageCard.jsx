const MessageCard = ({ message }) => {
  return ( 
    <div>
      <p>Text: {message.text}</p> 
      <p>Receiver:{message.recipient.name}</p>
    </div>
   )
}
 
export default MessageCard