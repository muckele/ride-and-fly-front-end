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
          <p>
            {post.author}
            {post.date}
            {post.time}
            {post.airport}
            {post.terminal}
            {post.dropOff}
            {post.partySize}
            {post.car}
          </p>
        </header>
      </article>
    </Link>
    )
}

export default PostCard