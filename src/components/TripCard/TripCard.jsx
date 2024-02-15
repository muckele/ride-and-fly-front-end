// npm modules
import { Link } from 'react-router-dom'

// css 
import './TripCard.css'

const TripCard = ( {trip} ) => {


  return (
    <div className='outer-postcard-container'>
        {/* <Link to={`/trips/${trip._id}`}> */}
      <div className='postcard-container'>
      <ul>
        <li>User name: {trip.author[0].name}</li>
        <li>Date/Time: {trip.date}</li>
        <li>Airport: {trip.airport}</li>
        <li>Terminal: {trip.terminal}</li>
        <li>Dropoff: {trip.dropOff} </li>
        <li>Party size: {trip.partySize}</li>
        <li>Luxury Car: {trip.luxuryCar ? 'Yes' : 'No'}</li>
        <li>Oversized Luggage: {trip.oversizedLuggage ? 'Yes' : 'No'}</li>
        <li>Traveling with a Pet: {trip.travelingWithPet ? 'Yes' : 'No'}</li>
        <li>Car Type: {trip.carType}</li>
      </ul>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default TripCard