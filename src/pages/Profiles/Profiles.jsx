// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

// css
import './Profiles.css'

const Profiles = () => {
  const { profileId } = useParams()
  // const [profiles, setProfiles] = useState([])
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileData = await profileService.getProfile(profileId)
      console.log(profileData)
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
      <p>{userProfile.name}</p>
      <img src={userProfile.photo} alt="A sexy image" />
      <p>{userProfile.bio}</p>
      <p>{userProfile.funFacts}</p>
      {userProfile.posts.map(post=> 
        <p key={userProfile._id}>{post}</p>
      )}
      
      <Link to={`/profiles/${profileId}/edit`} state={userProfile}>EDIT</Link>
    </main>
  
  )
}

export default Profiles
