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
        <li>User name: {post.author[0].name}</li>
        <li>Date/Time: {post.date}</li>
        <li>Airport: {post.airport}</li>
        <li>Terminal: {post.terminal}</li>
        <li>Dropoff: {post.dropOff} </li>
        <li>Party size: {post.partySize}</li>
        <li>Luxury Car: {post.luxuryCar ? 'Yes' : 'No'}</li>
        <li>Oversized Luggage: {post.oversizedLuggage ? 'Yes' : 'No'}</li>
        <li>Traveling with a Pet: {post.travelingWithPet ? 'Yes' : 'No'}</li>
        <li>Car Type: {post.carType}</li>
      </ul>
      </div>
    </div>
  )
}

export default PostCard