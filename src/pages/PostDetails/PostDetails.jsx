// npm modules 
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

//services
import * as postService from '../../services/postService'

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
  const author = Array.isArray(post?.author) ? post.author[0] : post?.author
  const formattedDate = post?.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''
  const preferenceTags = [
    post?.oversizedLuggage && 'Oversized luggage',
    post?.travelingWithPet && 'Traveling with a pet',
    post?.luxuryCar && 'Luxury ride requested',
    post?.carType && `${post.carType.toUpperCase()} preferred`,
  ].filter(Boolean)
  
  const handleChange = evt => {
    setMessageFormData({...messageFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const messageData = {
      ...messageFormData,
      relatedPost: postId,
      recipient: author?._id
    }
    await props.handleSendMessage(messageData)
    setMessageFormData({text: ''})
    navigate('/inbox')
  }

  const handleAddReview = async (reviewFormData) => {
    const newReview = await postService.createReview(postId, reviewFormData)
    setPost({ ...post, reviews: [...(post.reviews || []), newReview] })
  }

  async function handleCreateTrip() {
    const profileId = props.user.profile
    const postAuthorId = author?._id
    const carPals = [profileId, postAuthorId]
    const trip = {
      post: postId,
      carPals: carPals,
    }
    try {
      await props.handleCreateTrip(trip)
    } catch (error) {
      console.error("Failed to create trip", error)
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(postId)
      setPost(data)
    }
    fetchPost()
  }, [postId])


  if (!post) {
    return (
      <main className="post-details-page post-loading">
        <h1>Loading trip details...</h1>
      </main>
    )
  }

  return (
    <main className="post-details-page">
      <section className="post-hero">
        <div className="post-hero-copy-wrap">
          <p className="post-hero-eyebrow">Ride request</p>
          <h1 id="detail-title">{author?.name} is heading from {post.airport} to {post.dropOff}</h1>
          <p className="post-hero-copy">
            {formattedDate} at {post.time} · Terminal {post.terminal} · Party of {post.partySize}
          </p>
        </div>

        <div className="post-hero-actions">
          {author?._id === props.user.profile ? (
            <>
              <Link className="post-action-link" to={`/posts/${postId}/edit`} state={post}>
                <i className="ri-pencil-line"></i> Edit Post
              </Link>
              <button
                type="button"
                className="post-danger-action"
                onClick={() => props.handleDeletePost(postId)}
              >
                <i className="ri-delete-bin-line"></i> Delete
              </button>
            </>
          ) : (
            <button type="button" className="post-primary-action" onClick={handleCreateTrip}>
              <i className="ri-roadster-fill"></i> Confirm Ride Share
            </button>
          )}
        </div>
      </section>

      <div className="post-details-container">
        <aside className="post-summary-card">
          <p className="post-card-eyebrow">Trip Snapshot</p>
          <div className="post-summary-grid">
            <div className="summary-row">
              <span className="summary-label">Car pal</span>
              <strong className="summary-value">{author?.name}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Date</span>
              <strong className="summary-value">{formattedDate}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Time</span>
              <strong className="summary-value">{post.time}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Airport</span>
              <strong className="summary-value">{post.airport}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Terminal</span>
              <strong className="summary-value">{post.terminal}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Dropoff</span>
              <strong className="summary-value">{post.dropOff}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Party size</span>
              <strong className="summary-value">{post.partySize}</strong>
            </div>
          </div>

          {preferenceTags.length ? (
            <div className="post-preferences">
              {preferenceTags.map(tag => (
                <span key={tag} className="preference-chip">{tag}</span>
              ))}
            </div>
          ) : (
            <p className="post-summary-note">No special travel preferences were added for this ride.</p>
          )}
        </aside>

        <section className="post-detail-stack">
          <section className="post-panel message-pt">
            <div className="panel-header">
              <p className="panel-eyebrow">Messaging</p>
              <h2>Start the conversation</h2>
              <p>Send a quick note before confirming the trip details together.</p>
            </div>
            <form className="post-message-form" onSubmit={handleSubmit}>
              <label htmlFor="text-input">Message</label>
              <textarea
                required
                name="text"
                id="text-input"
                value={messageFormData.text}
                placeholder={`Send ${author?.name} a quick message`}
                onChange={handleChange}
              />
              <button>Send Message</button>
            </form>
          </section>

          <section className="post-panel reviews-pt">
            <div className="panel-header">
              <p className="panel-eyebrow">Reviews</p>
              <h2>Past ride feedback</h2>
              <p>Leave context for future car pals and learn what the ride was like.</p>
            </div>
            <NewReview handleAddReview={handleAddReview} />
            <div className="reviews-list">
              <Reviews reviews={post.reviews} user={props.user}/>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default PostDetails
