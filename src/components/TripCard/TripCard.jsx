// npm modules
import { Link } from 'react-router-dom'



// css 
import './TripCard.css'

const TripCard = ( {trip, handleCompleteTrip} ) => {

  const formattedDate = new Date(trip.post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  

  return (
    <div className='outer-postcard-container'>
      
      <div className='postcard-container'>
      <ul>
        <li>Car Pal: {trip.carPals[0].name}</li>
        <li>Date: {formattedDate}</li>
        <li>Time: {trip.post.time}</li>
        <li>Airport: {trip.post.airport}</li>
        <li>Terminal: {trip.post.terminal}</li>
        <li>Dropoff: {trip.post.dropOff} </li>
        <Link to={`/trips/${trip._id}`}>Trip Details</Link>
        {trip.isActive && (
            <button onClick={() => handleCompleteTrip(trip._id)}>Mark as Completed</button>
        )}
      </ul>
      </div>
      
    </div>
  )
}

export default TripCard