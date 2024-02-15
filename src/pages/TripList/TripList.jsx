// npm modules
import { useState } from "react"



// components
import TripCard from '../../components/TripCard/TripCard'

// css
import './TripList.css'

const TripList = (props) => {
  console.log(props.trips)
  return (
    <>
      <main>
        <div className="active-trips">
            <h1>Active Trips</h1>
            {props.trips.map((trip) => (
              <TripCard key={trip._id} trip={trip}  />
            ))}
            {/* <button onClick={handleCompleteTrip}>Click Here</button> */}
        </div>
        <div className="completed-trips">
          <h1>Completed Trips</h1>
        </div>
      </main>
    </>
  )
}

export default TripList