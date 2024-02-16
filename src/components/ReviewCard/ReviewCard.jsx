// components


import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  return (
    <div className="rc-container">
    <span className='Review-Card'>
      {review.review}
    </span></div>
  )
}

export default ReviewCard