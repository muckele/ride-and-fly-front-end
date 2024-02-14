// css
import './PostList.css'

// components
import PostCard from '../../components/PostCard/PostCard'



const PostList = (props) => {
  return ( 
    <main className='postlist-container'>
      <h1><i className="ri-roadster-fill"></i> Post Board:</h1>
      {props.posts.map(post => (
        <PostCard key={post._id} post={post} user={props.user} />
      ))}
    </main>
  )
}

export default PostList