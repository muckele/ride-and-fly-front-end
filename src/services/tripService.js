// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/trips`

async function index() {
  try {
    const res = await fetch(BASE_URL, { 
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createReview(tripId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}/reviews`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createTrip(tripFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripFormData)
    });
    return res.json()
  } catch (error) {
    console.error("Failed to create trip", error)
  }
}

async function showTrip(tripId) {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const completeTrip = async (tripId) => {
  try {
    const response = await fetch(`${BASE_URL}/${tripId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isActive: false, 
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to complete the trip')
    }
    const updatedTrip = await response.json()
    console.log('Trip marked as complete:', updatedTrip)
  } catch (error) {
    console.error('Error completing the trip:', error)
  }
}


export {
  createReview,
  index,
  createTrip,
  showTrip, 
  completeTrip
}