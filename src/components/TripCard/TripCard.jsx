// npm modules
import { Link } from 'react-router-dom'



// css 
import './TripCard.css'

const TripCard = ( {trip, handleCompleteTrip} ) => {
  const displayCarPal = trip.carPals?.[0]?.name || 'Unknown'
  const formattedDate = new Date(trip.post.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  

  return (
    <div className='outer-postcard-container'>
      <div className='postcard-container'>
        <ul>
          <li>Car Pal: {displayCarPal}</li>
          <li>Date: {formattedDate}</li>
          <li>Time: {trip.post.time}</li>
          <li>Airport: {trip.post.airport}</li>
          <li>Terminal: {trip.post.terminal}</li>
          <li>Dropoff: {trip.post.dropOff}</li>
          <li className="trip-card__actions">
            <Link className="trip-card__action-link" to={`/trips/${trip._id}`}>Trip Details</Link>
            {trip.isActive && (
              <button onClick={() => handleCompleteTrip(trip._id)}>Mark as Completed</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TripCard
