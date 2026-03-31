// npm modules
import { NavLink } from 'react-router-dom'

//assets
import logo from '../../assets/images/logo.png'

//  css 
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  const firstName = user?.name?.split(' ')[0] || 'friend'
  const getNavLinkClassName = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <nav className='nav-container'>
      <NavLink to="/" className="nav-brand">
        <img src={logo} id="logo" alt="Ride & Fly Logo" />
        <span className="nav-brand-copy">
          <span className="nav-brand-name">Ride & Fly</span>
          <span className="nav-brand-tagline">Airport carpooling, refined</span>
        </span>
      </NavLink>
      <p id ="hello-nav" className="nav-greeting">
        {user ? `Welcome back, ${firstName}` : 'Airport rides, without the scramble'}
      </p>
      {user ?
        <ul className="nav-links">
          <li><NavLink className={getNavLinkClassName} to={`/profiles/${user.profile}`}><i className="ri-user-line"></i> Profile</NavLink></li>
          <li><NavLink className={getNavLinkClassName} to="/posts"><i className="ri-profile-line"></i> Posts</NavLink></li>
          <li><NavLink className={getNavLinkClassName} to="/posts/new"><i className="ri-pencil-line"></i> New Post</NavLink></li>
          <li><NavLink className={getNavLinkClassName} to="/trips"><i className="ri-roadster-fill"></i> Trips</NavLink></li>
          <li><NavLink className={getNavLinkClassName} to="/inbox"><i className="ri-chat-1-line"></i> Inbox</NavLink></li>
          <li><NavLink className={getNavLinkClassName} to="/auth/change-password"><i className="ri-settings-3-line"></i> Password</NavLink></li>
          <li>
            <button type="button" className="nav-logout" onClick={handleLogout}>
              <i className="ri-login-box-line"></i> Log Out
            </button>
          </li>
        </ul>
      :
        <ul className="nav-links">
          <li><NavLink className={getNavLinkClassName} to="/auth/login"><i className="ri-user-5-line"></i> Log In</NavLink></li>
          <li><NavLink className={getNavLinkClassName} to="/auth/signup"><i className="ri-user-add-line"></i> Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
