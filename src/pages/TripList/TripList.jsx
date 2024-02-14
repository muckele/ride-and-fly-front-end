// npm modules 
import { useState, useEffect } from "react"
// import { useParams, Link, useNavigate } from "react-router-dom"

// services
import { index as fetchTrips } from './services/tripService'
import * as tripService from '../../services/tripService'

// css
import './TripList.css'





const TripList = () => {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    const getTrips = async () => {
      try {
        const allTrips = await fetchTrips()
        setTrips(allTrips)
      } catch (error) {
        ('Error fetching trips:', error)
      }
    }
    getTrips()
  }, [])

  return ( 
    <div>
      <h1>Active Trips</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            {/* Display trip information here. Example: */}
            Post ID: {trip.post}, Car Pals: {trip.carPals.map(pal => pal._id).join(', ')}
            {/* Add more trip details as needed */}
          </li>
        ))}
      </ul>
    </div>
  )
}
  
  export default TripList









