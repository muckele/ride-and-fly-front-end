// npm modules
import { Link } from 'react-router-dom'

// components


// css 
import './PostCard.css'

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post._id}`}>
      <article>
        <header>
          <span>
            <h1>{post.createdAt}</h1>
          </span>
          <ul>
            <li>{post.author[0].name}</li>
            <li>{post.date}</li>
            <li>{post.time}</li>
            <li>{post.airport}</li>
            <li>{post.terminal}</li>
            <li>{post.dropOff}</li>
            <li>{post.partySize}</li>
           
          </ul>
        </header>
      </article>
    </Link>
    )
}

export default PostCard