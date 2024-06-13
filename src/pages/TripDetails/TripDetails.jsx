import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as tripService from '../../services/tripService';
import './TripDetails.css'



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
    <>
      <h2 className="trip-details-title">Trip Details</h2>
      <div className="outer-postcard-container">
        <div className="postcard-container">
          <ul className="trip-details-content">
            <li className="trip-detail-item"><strong>Car Pal:</strong> {trip.carPals[0].name}</li>
            <li className="trip-detail-item"><strong>Date:</strong> {formattedDate}</li>
            <li className="trip-detail-item"><strong>Time:</strong> {trip.post.time}</li>
            <li className="trip-detail-item"><strong>Airport:</strong> {trip.post.airport}</li>
            <li className="trip-detail-item"><strong>Terminal:</strong> {trip.post.terminal}</li>
            <li className="trip-detail-item"><strong>Dropoff:</strong> {trip.post.dropOff}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TripDetails;
