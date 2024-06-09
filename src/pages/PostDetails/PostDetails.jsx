// npm modules 
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

//services
import * as postService from '../../services/postService'

//pages
import { createTrip } from '../../services/tripService'

// compontents
import NewReview from "../../components/NewReview/NewReview"
// components
import Reviews from "../../components/Reviews/Reviews"

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
  const handleAddReview = async (reviewFormData) => {
    const newReview = await postService.createReview(postId, reviewFormData)
    console.log(reviewFormData)
    setPost({...post, reviews: [...post.reviews, newReview] })
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
    if (data.date) {
      const formattedDate = new Date(data.date).toLocaleDateString()
      data.date = formattedDate
    }
    setPost(data)
  }
  fetchPost()
}, [postId])


  if (!post) return <h1>Loading, please wait!</h1>

  return (
    <>
    <div className="post-header">
        <h1 id="detail-title" >{post.author[0].name} looking for a carpal from {post.airport} to {post.dropOff}</h1>
    </div
    
    >
    <div className="post-details-container">
      
      <div className="box main-content">
        <section className="post-content">
          <div className="post-info">
          {post.author[0]._id === props.user.profile &&
            <Link to={`/posts/${postId}/edit`} state={post} ><i className="ri-pencil-line pd-p"></i>EDIT</Link> 
          }
              <p className="pd-p">Carpal: {post.author[0].name}</p>
              <p className="pd-p">Date: {post.date}</p>
              <p className="pd-p">Time:{post.time}</p>
              <p className="pd-p">Airport:{post.airport}</p>
              <p className="pd-p">Terminal:{post.terminal}</p>
              <p className="pd-p">Drop off:{post.dropOff}</p>
              <p className="pd-p">Party size:{post.partySize}</p>
          </div>
        {post.author[0]._id === props.user.profile &&
          <div className="post-actions">
              
              <button id="pd-delete-button" onClick={() => props.handleDeletePost(postId)}><i className="ri-delete-bin-line"></i>  Delete</button>
          </div>
        }
        {post.author[0]._id !== props.user.profile && (
          <div className="create-trip-section">
            <button onClick={handleCreateTrip}>Confirm Ride Share</button>
          </div> 
        )}
        </section>
      </div>



      <div className="box content-row">
        <div className="message-pt">
        <section >
          <form  onSubmit={handleSubmit}>
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
        </section></div>
      
  
      <div className="reviews-pt">
      <section >
        
        <NewReview handleAddReview={handleAddReview} />
        <Reviews reviews={post.reviews} user={props.user}/>
      </section>  </div></div>
    
  </div>
  </>
  )
}

export default PostDetails