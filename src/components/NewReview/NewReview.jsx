// npm imports
import { useState } from "react"
import * as React from 'react';
import Rating from '@mui/material/Rating';

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

  // mui rating   
   const [value, setValue] = React.useState(0);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label htmlFor="review-input">Review:</label>

      {/* rating */}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      />


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