// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import './EditPost.css'

const EditPost = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  console.log(state)
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // Update this line shortly...
  }

}

export default EditPost