// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import './EditPost.css'

const EditPost = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  console.log(state)

  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdatePost(formData)
  }
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date-input">Date:</label>
        <input
          required
          type="Date" 
          name="date"
          id="date-input"
          value={formData.date}
          onChange={handleChange}
        />

      <label htmlFor="time-input">Time:</label> 
        <input
          required
          type="Time" 
          name="time"
          id="time-input"
          value={formData.time}
          onChange={handleChange}
        />

        <label htmlFor="airport-input">Airport:</label>
        <select
          required
          name="airport"
          id="airport-input"
          value={formData.airport}
          onChange={handleChange}
        >
          <option value="EWR">EWR</option>
          <option value="JFK">JFK</option>
          <option value="LGA">LGA</option>
        </select>
        <label htmlFor="terminal-input">Terminal:</label>
				<input
          required
          type="text"
          name="terminal"
          id="terminal-input"
          value={formData.terminal}
          onChange={handleChange}
        /> 
        <label htmlFor="dropOff-input">Dropoff:</label>
				<input
          required
          type="text"
          name="dropOff"
          id="dropOff-input"
          value={formData.dropOff}
          onChange={handleChange}
        />
        <label htmlFor="partySize-input">Party Size:</label>
				<input
          required
          type="text"
          name="partySize"
          id="partySize-input"
          value={formData.partySize}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </main>
  )
}

export default EditPost