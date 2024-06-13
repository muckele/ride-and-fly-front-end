import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as tripService from '../../services/tripService';
import './TripDetails.css';

const TripDetails = ({ trips }) => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const selectedTrip = trips.find(t => t._id === tripId);
    if (selectedTrip) {
      setTrip(selectedTrip);
    } else {
      tripService.getTrip(tripId).then(response => setTrip(response));
    }
  }, [tripId, trips]);

  if (!trip) return <div>Loading...</div>;

  const formattedDate = new Date(trip.post.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='trip-details'>
      <h2>Trip Details</h2>
      <ul>
        <li>Car Pal: {trip.carPals[0].name}</li>
        <li>Date: {formattedDate}</li>
        <li>Time: {trip.post.time}</li>
        <li>Airport: {trip.post.airport}</li>
        <li>Terminal: {trip.post.terminal}</li>
        <li>Dropoff: {trip.post.dropOff}</li>
      </ul>
    </div>
  );
};

export default TripDetails;
