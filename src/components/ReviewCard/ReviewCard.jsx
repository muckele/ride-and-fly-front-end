// npm modules
import { Link } from 'react-router-dom'
import  { useState, } from 'react'
// css
import './ReviewCard.css'

const ReviewCard = ({ review, user, onReviewSubmit,  }) => {
  const [ totalRating, setTotalRating ] = useState(0)
  const [ selectedRating, setSelectedRating] = useState(1) 
  const [reviewContent, setReviewContent] = useState('')



  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value)
  }

  const handleReviewChange = (e) => {
    setReviewContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReview = {
      rating: selectedRating,
      review: reviewContent,
    };
    onReviewSubmit(newReview)
    setSelectedRating('1')
    setReviewContent('')
  };


  return ( 
    <section className="reviews">
      <hr />
      <h2>Reviews</h2>
      {user && (
        <form id="add-review-form" onSubmit={handleSubmit}>
          <div className="star-rating">
            <label htmlFor="rating">Your Rating:</label>
            <select
              id="rating"
              value={selectedRating}
              onChange={handleRatingChange}
              name="rating"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={String(value)}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="content"
            id="content-textarea"
            value={reviewContent}
            onChange={handleReviewChange}
            placeholder="Tell us what you thought!"
          ></textarea>
          <br />
          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      )}
    </section>
  )
}

export default ReviewCard;