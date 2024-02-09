// css
import './PostList.css'



const PostList = (props) => {
  return ( 
    <main>
      {props.posts.map(post => (
        <p key={post._id}>
          I'm looking for: 
          {post.createdAt}
        </p>
      ))}
    </main>
  )
}
 
export default PostList