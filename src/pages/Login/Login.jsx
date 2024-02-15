// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import './Login.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main >
      <h1>Log In</h1>
      <p >{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} >
        <div className='form-row'>
        <label >
          Email:
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        </div>

        <div className='form-row'>
        <label >
          Password:
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        </div>
        <div>
          <Link to="/">Cancel</Link><br/>
          <button  id ="login-btn" disabled={isFormInvalid()}>
          <i className="ri-login-box-line"></i>  Log In
          </button>
        </div>
      </form>
    </main>
  )
}

export default LoginPage
