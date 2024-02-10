// npm modules 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import * as postService from '../../services/postService'

// css
import './PostDetails.css'

const PostDetails = (props) => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(postId)
      setPost(data)
    }
    fetchPost()
  }, [postId])

  if (!post) return <h1>Loading, please wait!</h1>
  

  return (
    <main>
      <span>
        <h1>{post.createdAt}</h1>
      </span>
      <div className="post-body">
        <ul>
          <li>{post.author[0].name}</li>
          <li>{post.date}</li>
          <li>{post.time}</li>
          <li>{post.airport}</li>
          <li>{post.terminal}</li>
          <li>{post.dropOff}</li>
          <li>{post.partySize}</li>
        </ul>
      </div>
      <div className="message-body">
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          placeholder="Text"
        />
        <button type="submit">Send Message</button>
      </div>

    </main>
  )
}

export default PostDetails