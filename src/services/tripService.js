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

async function updateTripStatus(tripId){
  try {
    const res = await fetch(`${BASE_URL}/complete-trip/${tripId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error) 
  }
}


export {
  createReview,
  index,
  createTrip,
  showTrip, 
  updateTripStatus
}