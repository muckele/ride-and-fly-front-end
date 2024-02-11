// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

const Profiles = (props) => {
  const { profileId } = useParams()
  // const [profiles, setProfiles] = useState([])
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileData = await profileService.getProfile(profileId)
      setUserProfile(profileData)
    }
    fetchUserProfile()
  }, [profileId])
  

  if (!userProfile) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  return (
    <main className={styles.container}>
      <h1>Profile</h1>
      <p>{userProfile.name}</p>
      <img src={userProfile.photo} alt="A sexy image" />
      <p>{userProfile.bio}</p>
      <p>{userProfile.funFacts}</p>
      {userProfile.posts.map(post=> post.createAt)}
      
      <Link to={`/profiles/${profileId}/edit`} state={props.user}>EDIT</Link>
    </main>
  
  )
}

export default Profiles
