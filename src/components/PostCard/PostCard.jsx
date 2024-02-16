// npm modules
import { Link } from 'react-router-dom'

// css 
import './PostCard.css'

const PostCard = ( {post} ) => {


  return (
    <div className='outer-postcard-container'>
      
        {/* <span>
          <h1>{post.createdAt}</h1>
        </span> */}
        <Link to={`/posts/${post._id}`}>
      <div className='postcard-container'>
      <ul>
        <li>Car Pal: {post.author[0].name}</li>
        <li>Date/Time: {post.date}</li>
        <li>Time: {post.time}</li>
        <li>Airport: {post.airport}</li>
        <li>Terminal: {post.terminal}</li>
        <li>Dropoff: {post.dropOff} </li>
      </ul>
      </div>
      </Link>
    </div>
  )
}

export default PostCard