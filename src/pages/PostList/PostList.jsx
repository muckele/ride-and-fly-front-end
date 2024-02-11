// css
import './PostList.css'

// components
import PostCard from '../../components/PostCard/PostCard'



const PostList = (props) => {
  return ( 
    <main>
      {props.posts.map(post => (
        <PostCard key={post._id} post={post} user={props.user} />
      ))}
    </main>
  )
}

export default PostList