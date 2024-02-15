import './CompletedTrips.css'

const CompletedTrips = ({trip}) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <section className="completed-trip">
        <ul>
          {trip.completedTrip.map(item =>
            <li key={item._id}>
              {props.trips.map((trip) => (
              <TripCard key={trip._id} trip={trip}  />
              ))}
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default CompletedTrips