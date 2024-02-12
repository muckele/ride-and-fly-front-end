const MessageCard = ({ message }) => {
  return ( 
    <div>
      <p>Text: {message.text}</p> 
      {/* <p>Receiver:{message.recipient.name}</p> */}
    </div>
    // ! data does not provide 'messageAuthor' must adjust backend 
   )
}
 
export default MessageCard