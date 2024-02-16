// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

//assets
import profile from '../../assets/icons/profile.png'

// css
import './Profiles.css'

const Profiles = () => {
  const { profileId } = useParams()
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileData = await profileService.getProfile(profileId)
      setUserProfile(profileData)
    }
    fetchUserProfile()
  }, [profileId])
  

  if (!userProfile) {
    return <main className="profile-container"><h1>Loading...</h1></main>
  }
  return (
    <main className="profile-container">
    
      <p id = "profile-title">Profile</p>
      <div className='profile-content'>
      <h3><br/>{userProfile.name}</h3><br/>
      <img className='profile-icon' src={userProfile.photo? userProfile.photo : profile} alt="A sexy image" /><br/>
      <p>Bio: <br/>{userProfile.bio}</p><br/>
      <p>Funfacts: <br/>{userProfile.funFacts}</p><br/>
      <p>Post History: </p>
      {userProfile.posts.map(post=> 
        <p key={userProfile._id}>{post}</p>
      )}
      <Link to={`/profiles/${profileId}/edit`} state={userProfile}><i className="ri-pencil-line"></i>  EDIT</Link>
      </div>


    </main>
  
  )
}

export default Profiles
