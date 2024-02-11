// npm modules
import { NavLink } from 'react-router-dom'

//  css 
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className='nav-container'>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to={`/profiles/${user.profile}`}>Profiles</NavLink></li>
          {/* <li><NavLink to="/profiles/:profileId">Profiles</NavLink></li> */}
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
          <li><NavLink to="/posts/new">New Post</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar