import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../ConversationCard/ConversationCard.css';

const ConversationCard = ({ conversation, user }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (conversation.createdAt) {
      const date = new Date(conversation.createdAt);
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      setFormattedDate(date.toLocaleDateString('en-US', options));
    }
  }, [conversation.createdAt]);

  return (
    <div className='conversation-card'>
      <Link to={`/conversations/${conversation._id}`}>
        <p>Created: {formattedDate}</p>
        <p>From: {(user.profile === conversation.messageAuthor._id) ? "Me" : conversation.messageAuthor.name}</p>
        <p>To: {(user.profile === conversation.recipient._id) ? "Me" : conversation.recipient.name}</p>
      </Link>
    </div>
  );
};

export default ConversationCard;
