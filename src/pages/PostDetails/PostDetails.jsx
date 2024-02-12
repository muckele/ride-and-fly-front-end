// npm modules 
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

//services
import * as postService from '../../services/postService'

// css
import './PostDetails.css'

const PostDetails = (props) => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

  const [messageFormData, setMessageFormData] = useState({text: ''})
  
  const handleChange = evt => {
    setMessageFormData({...messageFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()


    const messageData = {
      ...messageFormData,
      originalPost: postId,
      recipient: post.author[0]._id

    }

    console.log(messageData);

    props.handleSendMessage(messageData)
    setMessageFormData({text: ''})
  }

  


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
        <form onSubmit={handleSubmit}>
          <label htmlFor="text-input">Text</label>
          <textarea
            required
            type="text"
            name="text"
            id="text-input"
            value={messageFormData.text}
            onChange={handleChange}
          />
          <button>Send Message</button>
        </form>
      </div>

      <div>
        {post.author[0]._id === props.user.profile &&
        <>
          <Link to={`/posts/${postId}/edit`} state={post}>EDIT</Link> <br />
          <button onClick={() => props.handleDeletePost(postId)}>Delete</button>
        </>
        }
      </div>
  </main>
  )
}

export default PostDetails