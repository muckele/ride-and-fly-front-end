// npm modules
import { useState } from 'react'
import { useLocation } from "react-router-dom"

// css
import './EditProfile.css'

const EditProfile = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateProfile(formData)
  }
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }


  return (
    <main className='editprofile-container'>
      <h1>Edit Profile</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name-input"> Name </label>
          <input type="text" 
          value={formData.name} 
          name="name" 
          id="name-input"
          onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="email-input">Email</label>
          <input
          type="text"
          value={formData.email}
          name="email"
          id="email-input"
          onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="funFacts-input">Fun Facts</label>
          <input
            type="text"
            name="funFacts"
            id="funFacts-input"
            value={formData.funFacts}
            onChange={handleChange}
          />
        </div>

          <div className="form-row">
            <label htmlFor="bio-input">Bio</label>
            <input
              type="text"
              name="bio"
              id="bio-input"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>


        {/* <label>
          Upload Photo
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label> */}

  
          <button>Save Changes</button>
      
      </form>
    </main>
  
  )
}

export default EditProfile
