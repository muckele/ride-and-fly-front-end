// css
import './TripList.css'

// components
import PostCard from '../../components/PostCard/PostCard'



const TripList = (props) => {
  return ( 
    <main className='triplist-container'>
      <h1><i className="ri-roadster-fill"></i> Active Trips:</h1>
      {props.posts.map(post => (
        <PostCard key={post._id} post={post} user={props.user} />
      ))}
    </main>
  )
}

export default TripList