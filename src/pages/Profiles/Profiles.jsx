// npm modules
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

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
      <p>{props.user.profile.name}</p>
    </main>
  )
}

export default Profiles
