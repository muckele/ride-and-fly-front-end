// npm imports
import { useState } from "react"
import * as React from 'react';
import Rating from '@mui/material/Rating';

// css
import './NewReview.css'


const NewReview = (props) => {
  const [formData, setFormData] = useState({ text: '' })
  // mui rating   
  const [value, setValue] = React.useState(0);
  console.log(value)


  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
    console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(formData)
    setFormData({ text: '' })
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-row">
      <label htmlFor="rating-input">Review:</label>
      <Rating
        name="rating-input"
        value={formData.rating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
      <div className="form-row">
      <textarea
        name="review"
        value={formData.review}
        placeholder="Add a Review"
        onChange={handleChange}

      /></div>
      <div className="form-row">
      <button type="submit"><i className="ri-sticky-note-add-line">  Add a review</i>  </button></div>
    </form>
  )
}

export default NewReview