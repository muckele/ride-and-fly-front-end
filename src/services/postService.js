// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

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

async function create(postFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postFormData)
      })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error) 
  }
}

async function update(postFormData){
  try {
    const res = await fetch(`${BASE_URL}/${postFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error) 
  }
}

async function deletePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createReview(postId, reviewFromData) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFromData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  index,
  show,
  create,
  update,
  deletePost,
  createReview
}
