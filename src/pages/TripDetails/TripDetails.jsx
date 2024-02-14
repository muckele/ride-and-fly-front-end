//  npm modules
import { useState } from "react"
import { useParams } from "react-router-dom"

// services
import * as tripService from '../../services/tripService'

//  pages
import NewReview from "../../components/NewReview/NewReview"

const TripDetails = (props) => {
  const {tripId} = useParams()
  const[trip, setTrip] = useState(null)


  const handleAddReview = async (reviewFormData)=>{
    const newReview =await tripService.createReview(tripId, reviewFormData)
    setTrip({...trip,reviews: [...trip.reviews, newReview]})
  }
  return ( 
    <div>
    <section>
      <h2>Trip Detail</h2>
      <h2>Reviews</h2>
      <NewReview handleAddReview={handleAddReview} />
    </section>
    </div>
  )
}
export default TripDetails