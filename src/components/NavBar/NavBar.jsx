// npm modules
import { NavLink } from 'react-router-dom'

//assets
import logo from '../../assets/images/logo.png'

//  css 
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className='nav-container'>
      <NavLink to="/"><img src={logo} id="logo" alt="Ride & Fly Logo" /></NavLink>
      {user ?
        <ul>
          <li><NavLink to={`/profiles/${user.profile}`}><i className="ri-user-line"></i> Profiles</NavLink></li>
          {/* <li><NavLink to="/profiles/:profileId">Profiles</NavLink></li> */}
          <li><NavLink to="/posts"><i className="ri-profile-line"></i> Posts</NavLink></li>
          <li><NavLink to="/posts/new"><i className="ri-pencil-line"></i> New Post</NavLink></li>
          <li><NavLink to="/auth/change-password"><i className="ri-settings-3-line"></i> Change Password</NavLink></li>
          <li><NavLink to="/trips"><i className="ri-roadster-fill"></i> Trips</NavLink></li>
          <li><NavLink to="/inbox"><i className="ri-chat-1-line"></i> Inbox</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}><i className="ri-login-box-line"></i> Log Out</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login"><i className="ri-user-5-line"></i> Log In</NavLink></li>
          <li><NavLink to="/auth/signup"><i className="ri-user-add-line"></i> Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar