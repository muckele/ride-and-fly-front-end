import { useState } from 'react'

// css
import './NewReview.css'

const NewReview = (props) => {
  const [formData, setFormData] = useState({ review: '' })
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmit = (evt) => {
  evt.preventDefault()
  props.handleAddReview(formData)
  setFormData({ review: '' })
  console.log(formData)
}

return (
  <form onSubmit={handleSubmit}>
    <textarea
      required
      name="review"
      value={formData.review}
      placeholder="Add a Review"
      onChange={handleChange}
    />
    <button type="submit">Submit Review</button>
  </form>
  )
}
  

export default NewReview