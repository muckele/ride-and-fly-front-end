// npm modules
import { useState } from "react"



// components
import TripCard from '../../components/TripCard/TripCard'

// css
import './TripList.css'

const TripList = (props) => {
  console.log(props.trips)
  return (
    <main>
      {props.trips.map((trip) => (
        <TripCard key={trip._id} trip={trip}  />
      ))}
    </main>
  )
}

export default TripList