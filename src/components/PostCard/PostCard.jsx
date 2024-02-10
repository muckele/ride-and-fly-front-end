// npm modules
import { useParams, Link } from 'react-router-dom'


// components


// css 
import './PostCard.css'

const PostCard = ({ post, user }) => {
  return (
    <div>
      <Link to={`/posts/${post._id}`}>
        <span>
          <h1>{post.createdAt}</h1>
        </span>
      </Link>
      <ul>
        <li>{post.author[0].name}</li>
        <li>{post.date}</li>
        <li>{post.time}</li>
        <li>{post.airport}</li>
        <li>{post.terminal}</li>
        <li>{post.dropOff}</li>
        <li>{post.partySize}</li>
      </ul>
      <span>

        {post.author[0]._id === user.profile &&
          <>
            <Link to={`/posts/${post._id}/edit`}>EDIT</Link>
          </>
        }

      </span>
    </div>
  )
}

export default PostCard