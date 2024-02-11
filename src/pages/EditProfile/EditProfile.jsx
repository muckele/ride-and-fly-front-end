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
    console.log(formData);
    props.handleUpdateProfile(formData)
  }
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  // const handleChangePhoto = evt => {
  //   const file = evt.target.files[0]
  //   let isFileInvalid = false
  //   let errMsg = ""
  //   const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
  //   const photoFormat = file.name.split('.').at(-1)

  //   // cloudinary supports files up to 10.4MB each as of May 2023
  //   if (file.size >= 10485760) {
  //     errMsg = "Image must be smaller than 10.4MB"
  //     isFileInvalid = true
  //   }
  //   if (!validFormats.includes(photoFormat)) {
  //     errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
  //     isFileInvalid = true
  //   }
    
  //   if (isFileInvalid) {
  //     imgInputRef.current.value = null
  //     return
  //   }

  //   setPhotoData({ photo: evt.target.files[0] })
  // }


  return (
    <main>
      <h1>Edit Profile</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={formData.name} name="name" onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Fun Facts
          <input
            type="text"
            name="funFacts"
            value={formData.funFacts}
            onChange={handleChange}
          />
          </label>
          <label>
          Bio
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
          </label>


        {/* <label>
          Upload Photo
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label> */}
        <div>
          <button>Save Changes</button>
        </div>
      </form>
    </main>
  
  )
}

export default EditProfile
