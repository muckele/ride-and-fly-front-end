// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

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
    
      <h1>Profile</h1>
      <div className='profile-content'>
      <p>User name: <br/>{userProfile.name}</p><br/>
      <img src={userProfile.photo} alt="A sexy image" />
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
