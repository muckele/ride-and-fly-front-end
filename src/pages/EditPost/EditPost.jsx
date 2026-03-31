// npm modules
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

// services
import * as postService from '../../services/postService'

//css
import './EditPost.css'

const EditPost = (props) => {
  const { state } = useLocation()
  const { postId } = useParams()
  const [formData, setFormData] = useState(state ?? null)

  useEffect(() => {
    const fetchPost = async () => {
      if (state) {
        setFormData({
          ...state,
          date: state.date ? new Date(state.date).toISOString().split('T')[0] : '',
        })
        return
      }

      const post = await postService.show(postId)
      setFormData({
        ...post,
        date: post.date ? new Date(post.date).toISOString().split('T')[0] : '',
      })
    }

    fetchPost()
  }, [postId, state])

  if (!formData) return <main className="editpost-container"><h1>Loading...</h1></main>

  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdatePost(formData)
  }
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  return (
    <main className="editpost-container">
      <section className="editpost-shell">
      <div className="editpost-header">
        <p className="editpost-eyebrow">Update ride request</p>
        <h1>Edit Post</h1>
      </div>
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
          type="Time" 
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
        <button type="submit">Update</button>
      </form>
      </section>
    </main>
  )
}

export default EditPost
