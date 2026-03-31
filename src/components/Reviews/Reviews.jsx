// components
import ReviewCard from '../ReviewCard/ReviewCard'
import './Reviews.css'

const Reviews = (props) => {
  if (!props.reviews?.length) {
    return <p className="reviews-empty">No reviews yet. Be the first to leave one after the ride.</p>
  }

  return (
    <>
      {props.reviews.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Reviews
