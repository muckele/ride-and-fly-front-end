// npm modules
import { Link } from 'react-router-dom'

// css 
import './PostCard.css'

const PostCard = ( {post} ) => {
  const author = Array.isArray(post.author) ? post.author[0] : post.author
  const formattedDate = new Date(post.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const preferenceTags = [
    post.oversizedLuggage && 'Oversized luggage',
    post.travelingWithPet && 'Pet friendly',
    post.luxuryCar && 'Luxury ride',
    post.carType && post.carType.toUpperCase(),
  ].filter(Boolean)

  return (
    <div className='outer-postcard-container'>
      <Link className='postcard-link' to={`/posts/${post._id}`}>
        <article className='postcard-container'>
          <div className='postcard-header'>
            <div>
              <p className='postcard-eyebrow'>Ride request</p>
              <h2>{post.airport} to {post.dropOff}</h2>
            </div>
            <span className='postcard-badge'>{post.partySize} riders</span>
          </div>

          <div className='postcard-grid'>
            <div className='postcard-meta'>
              <span>Car pal</span>
              <strong>{author?.name}</strong>
            </div>
            <div className='postcard-meta'>
              <span>Date</span>
              <strong>{formattedDate}</strong>
            </div>
            <div className='postcard-meta'>
              <span>Time</span>
              <strong>{post.time}</strong>
            </div>
            <div className='postcard-meta'>
              <span>Terminal</span>
              <strong>{post.terminal}</strong>
            </div>
          </div>

          {preferenceTags.length ? (
            <div className='postcard-tags'>
              {preferenceTags.map(tag => (
                <span key={tag} className='postcard-tag'>{tag}</span>
              ))}
            </div>
          ) : null}
        </article>
      </Link>
    </div>
  )
}

export default PostCard
