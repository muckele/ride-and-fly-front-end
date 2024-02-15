// npm modules
import { useState, useEffect } from "react"

// components
import TripCard from '../../components/TripCard/TripCard'

// css
import './TripList.css'



const TripList = (props) => {
  const [activeTrips, setActiveTrips] = useState([])
  const [completedTrips, setCompletedTrips] = useState([])

  useEffect(() => {
    const active = props.trips.filter(trip => trip.isActive)
    const completed = props.trips.filter(trip => !trip.isActive)
    setActiveTrips(active)
    setCompletedTrips(completed)
  }, [props.trips])

  const completeTrip = (tripd) => {
    const trip = activeTrips.find(t => t._id === tripId)
    if (!trip) return
    const updatedActiveTrips = activeTrips.filter(t => t._id !== tripId);
    setActiveTrips(updatedActiveTrips)
    setCompletedTrips([...completedTrips, { ...trip, isActive: false }])
  }

  console.log(props.trips)
  return (
    <>
      <main>
        <div className="active-trips">
          <h2>Active Trips</h2>
          {activeTrips.map(trip => (
            <TripCard key={trip._id} trip={trip} onComplete={() => completeTrip(trip._id)} />
          ))}
        </div>
        <div className="completed-trips">
          <h2>Completed Trips</h2>
          {completedTrips.map(trip => (
            <TripCard key={trip._id} trip={trip} />
          ))}
        </div>
      </main>
    </>
  )
}

export default TripList


            // <h1>Active Trips</h1>
            // {props.trips.map((trip) => (
            //   <TripCard key={trip._id} trip={trip}  />
            // ))}
            // {/* <button onClick={handleCompleteTrip}>Click Here</button> */}