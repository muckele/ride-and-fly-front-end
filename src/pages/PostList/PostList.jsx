// css
import './PostList.css'

// components
import PostCard from '../../components/PostCard/PostCard'



const PostList = (props) => {
  return ( 
    <main>
      {props.posts.map(post => (
        <PostCard key={post._id} post={post}/>
      ))}
    </main>
  )
}

export default PostList