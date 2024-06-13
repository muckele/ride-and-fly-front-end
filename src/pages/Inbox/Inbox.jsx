//components
import ConversationCard from '../../components/ConversationCard/ConversationCard'
//css
import '../Inbox/Inbox.css'

const Inbox = (props) => {
  const userConversations = props.conversations.filter(conversation =>
    conversation.participants.includes(props.user.profile)
  );

  const getMostRecentMessage = (messages) => {
    return messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  };

  return (
    <div className='inbox-container'>
      <h1>Inbox</h1>
      {userConversations.map((conversation) => {
        const mostRecentMessage = getMostRecentMessage(conversation.messages);
        return (
          <ConversationCard
            key={conversation._id}
            conversation={conversation}
            user={props.user}
            mostRecentMessage={mostRecentMessage}
          />
        );
      })}
    </div>
  );
}

export default Inbox;