// npm modules
import { Link } from 'react-router-dom'

//services
import * as tripService from '../../services/tripService'

// css 
import './TripCard.css'

const TripCard = ( {trip} ) => {
  console.log("This is trip in TripCard: ", trip)

  return (
    <div className='outer-postcard-container'>
      <Link to={`/trips/${trip._id}`}>
      <div className='postcard-container'>
      <ul>
        <li>User name: {trip.carPals[0].name}</li>
        <li>Date/Time: {trip.post.date}</li>
        <li>Airport: {trip.post.airport}</li>
        <li>Terminal: {trip.post.terminal}</li>
        <li>Dropoff: {trip.post.dropOff} </li>
        <li>Party size: {trip.post.partySize}</li>
        <li>Luxury Car: {trip.post.luxuryCar ? 'Yes' : 'No'}</li>
        <li>Oversized Luggage: {trip.post.oversizedLuggage ? 'Yes' : 'No'}</li>
        <li>Traveling with a Pet: {trip.post.travelingWithPet ? 'Yes' : 'No'}</li>
        <li>Car Type: {trip.post.carType}</li>
      </ul>
      {/* <button onClick={() => trip.onComplete(trip.id)}>Complete Trip</button> */}
      </div>
      </Link>
    </div>
  )
}

export default TripCard