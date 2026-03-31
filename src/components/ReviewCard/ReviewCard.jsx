// components


import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  return (
    <article className="review-card">
      <p className='review-card__text'>{review.review}</p>
    </article>
  )
}

export default ReviewCard
