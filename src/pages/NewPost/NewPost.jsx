// npm modules
import { useState } from "react"

// css
import './NewPost.css'

const NewPost = (props) => {
  const[formData, setFormData] = useState({
    date: '',
    time: '',
    airport: 'EWR',
    terminal:'',
    dropOff:'',
    partySize:'',
    luxuryCar: false,
    oversizedLuggage: false,
    travelingWithPet: false,
    carType: ''
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPost(formData)
  }

  // const handleChange = evt => {
  //   setFormData({...formData, [evt.target.name]: evt.target.value})
  // }
  const handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }


  return ( 
  <main className="newpost-container">
    <form onSubmit={handleSubmit}>
        <div className="form-row">
        <label htmlFor="date-input">Date:</label>
        <input
          required
          type="Date" 
          name="date"
          id="date-input"
          value={formData.date}
          onChange={handleChange}
        />
        </div>

        <div className="form-row">
        <label htmlFor="time-input">Time:</label> 
        <input
          required
          type="Date" 
          name="time"
          id="time-input"
          value={formData.time}
          onChange={handleChange}
        />
        </div>

        <div className="form-row">
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
        </div>
      
        <div className="form-row">
        <label htmlFor="terminal-input">Terminal:</label>
				<input
          required
          type="text"
          name="terminal"
          id="terminal-input"
          value={formData.terminal}
          onChange={handleChange}
        />
        </div>

        <div className="form-row">
        <label htmlFor="dropOff-input">Dropoff:</label>
				<input
          required
          type="text"
          name="dropOff"
          id="dropOff-input"
          value={formData.dropOff}
          onChange={handleChange}
        />
        </div>

        <div className="form-row">
        <label htmlFor="partySize-input">Party Size:</label>
				<input
          required
          type="text"
          name="partySize"
          id="partySize-input"
          value={formData.partySize}
          onChange={handleChange}
        />
        </div>
        <label>
          Oversized Luggage:
          <input
            name="oversizedLuggage"
            type="checkbox"
            checked={formData.oversizedLuggage}
            onChange={handleChange}
          />
        </label>
        <label>
          Traveling with a Pet:
          <input
            name="travelingWithPet"
            type="checkbox"
            checked={formData.travelingWithPet}
            onChange={handleChange}
          />
        </label>
        <label>
          Luxury Car:
          <input
            name="luxuryCar"
            type="checkbox"
            checked={formData.luxuryCar}
            onChange={handleChange}
          />
        </label>
        <label>
          Car Type:
          <select name="carType" value={formData.carType} onChange={handleChange}>
            <option value="">Select Car Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
            <option value="luxury">Luxury</option>
          </select>
        </label>
        <div className="form-row">
        <button type="submit">SUBMIT</button>
        </div>
      </form>
  </main>
  );
}
export default NewPost;