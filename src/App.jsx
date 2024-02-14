// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import PostList from './pages/PostList/PostList'
import NewPost from './pages/NewPost/NewPost'
import PostDetails from './pages/PostDetails/PostDetails'
import EditPost from './pages/EditPost/EditPost'
import EditProfile from './pages/EditProfile/EditProfile'
import Inbox from './pages/Inbox/Inbox'
import TripDetails from './pages/TripDetails/TripDetails'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Footer from './components/Footer/footer'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as profileService from './services/profileService'
import * as messageService from './services/messageService'
import * as tripService from './services/tripService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const [profiles, setProfiles] = useState([])
  const [messages, setMessages] = useState([])
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  
  useEffect (() => {
    const fetchMessages = async () => {
      const data = await messageService.indexInbox()
      setMessages(data)
    }
    if (user) fetchMessages()
  }, [user])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllPosts = async () => {
      const data = await postService.index()
      setPosts(data)
    }
    if (user) fetchAllPosts()
  },[user])

  const handleAddPost = async (postFormData) => {
    const newPost = await postService.create(postFormData)
    setPosts([newPost, ...posts])
    navigate('/posts')
  }

  const handleUpdatePost = async (postFormData) => {
    const updatedPost = await postService.update(postFormData)
    setPosts(posts.map((post) => updatedPost._id === post._id ? updatedPost : post))
    navigate('/posts')
  }

  const handleDeletePost = async (postId) => {
  const deletedPost = await postService.deletePost(postId)
  setPosts(posts.filter(p => p._id !== deletedPost._id))
	navigate('/posts')
  }

  const handleUpdateProfile = async (profileFormData) => {
    const updatedProfile = await profileService.updateProfile(profileFormData)
    console.log(updatedProfile);
    setProfiles(profiles.map((profile) => updatedProfile._id === profile._id ? updatedProfile : profile))
    navigate(`/profiles/${updatedProfile._id}`)
  }

  const handleSendMessage = async (messageFormData) => {
    const newMessage = await messageService.createMessage(messageFormData)
    setMessages([newMessage, ...messages])
    // navigate('/inbox')
  }

  const handleCreateTrip = async (tripFormData) => {
    const newTrip = await tripService.create(tripFormData)
    setPosts([newTrip, ...trips])
    navigate('/trips')
  }
  
  return (
    <div className='app-container'>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute user={user}>
              <PostList posts={posts} user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/new"
          element={
            <ProtectedRoute user={user}>
              <NewPost handleAddPost={handleAddPost}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:postId"
          element={
            <ProtectedRoute user={user}>
              <PostDetails user={user} handleDeletePost={handleDeletePost} handleSendMessage={handleSendMessage} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/posts/:postId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditPost  handleUpdatePost={handleUpdatePost}/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profiles/:profileId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditProfile  handleUpdateProfile={handleUpdateProfile}/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/inbox" 
          element={
            <ProtectedRoute user={user}>
              <Inbox messages={messages} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/trips" 
          element={
            <ProtectedRoute user={user}>
              <TripDetails handleCreateTrip={handleCreateTrip}/>
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
