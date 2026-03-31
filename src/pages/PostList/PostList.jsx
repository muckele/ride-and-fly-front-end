// css
import './PostList.css'

// components
import PostCard from '../../components/PostCard/PostCard'



const PostList = (props) => {
  return ( 
    <main className='postlist-container'>
      <header className='postlist-header'>
        <div>
          <p className='postlist-eyebrow'>Ride board</p>
          <h1>Available airport rides</h1>
        </div>
        <p className='postlist-subtitle'>
          Browse active ride requests, compare routes, and jump into a conversation when the timing lines up.
        </p>
      </header>

      <section className='postlist-grid'>
        {props.posts.length ? (
          props.posts.map(post => (
            <PostCard key={post._id} post={post} user={props.user} />
          ))
        ) : (
          <div className='postlist-empty'>
            <h2>No rides posted yet.</h2>
            <p>Be the first to add an airport trip and set the tone for the board.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default PostList
