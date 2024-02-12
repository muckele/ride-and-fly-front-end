// npm modules
import { Link } from 'react-router-dom'

// css 
import './PostCard.css'

const PostCard = ( {post} ) => {


  return (
    <div>
      <Link to={`/posts/${post._id}`}>
        <span>
          <h1>{post.createdAt}</h1>
        </span>
      </Link>
      <div className='postcard-container'>
      <ul>
        <li>User name:</li>
        <li>Date/Time</li>
        <li>Airport</li>
        <li>Terminal #</li>
        <li>Drop off at </li>
        <li>Party size</li>
      </ul>
      <ul >
        <li>{post.author[0].name}</li>
        <li>{post.date}</li>
        <li>{post.time}</li>
        <li>{post.airport}</li>
        <li>{post.terminal}</li>
        <li>{post.dropOff}</li>
        <li>{post.partySize}</li>
      </ul>
      </div>
    </div>
  )
}

export default PostCard