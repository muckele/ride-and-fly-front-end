// npm modules 
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

//services
import * as postService from '../../services/postService'

//pages
import { createTrip } from '../../services/tripService'


// css
import './PostDetails.css'

const PostDetails = (props) => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()
  const [messageFormData, setMessageFormData] = useState({text: ''})
  
  const handleChange = evt => {
    setMessageFormData({...messageFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const messageData = {
      ...messageFormData,
      relatedPost: postId,
      recipient: post.author[0]._id
    }
    props.handleSendMessage(messageData)
    setMessageFormData({text: ''})
  }

  async function handleCreateTrip() {
    const profileId = props.user._id
    const postAuthorId = post.author[0]._id
    const carPals = [profileId, postAuthorId]
    const trip = {
      post: post,
      carPals: carPals,
    }
    try {
      await createTrip(trip)
      navigate('/trips')
  } catch (error) {
    console.error("Failed to create trip", error);
  }
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
      {/* <span>
        <h1>{post.createdAt}</h1>
      </span> */}
      <h1>{post.author[0].name} looking for Carpal<br/>from {post.dropOff}to {post.airport}</h1>
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
          <label htmlFor="text-input"><i className="ri-chat-smile-2-line"></i>  Send A Message:</label>
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
          <Link to={`/posts/${postId}/edit`} state={post}><i className="ri-pencil-line"></i>  EDIT</Link> <br />
          <button id="delete-button" onClick={() => props.handleDeletePost(postId)}><i className="ri-delete-bin-line"></i>  Delete</button>
        </>
        }
      </div>
      <div>
        {post.author[0]._id !== props.user.profile && (
          <button onClick={handleCreateTrip}>Confirm Ride Share</button>
        )}
      </div>
  </main>
  )
}

export default PostDetails