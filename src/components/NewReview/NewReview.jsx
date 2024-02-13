// npm imports
import { useState } from "react"

// css
import './NewReview.css'

const NewReview = (props) => {
  const [formData, setFormData] = useState({ text: '' })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(formData)
    setFormData({ text: '' })
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label htmlFor="review-input">Review:</label>
      <textarea
        name="review"
        value={formData.review}
        placeholder="Add a Review"
        onChange={handleChange}
      />
      <button type="submit"><i className="ri-sticky-note-add-line"></i></button>
    </form>
  )
}

export default NewReview