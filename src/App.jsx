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

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

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

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
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
              <PostDetails user={user} handleDeletePost={handleDeletePost} />
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
      </Routes>
    </>
  )
}

export default App
