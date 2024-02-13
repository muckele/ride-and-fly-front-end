// css
import './Landing.css'

const Landing = ({ user }) => {
  return (
    <main className='container'>
      <h1>Hello, {user ? user.name : 'friend'}</h1>
      <div className='container-left'>
        <div className='content'>
          <h1>Ready To<br/>Ditch Uber?</h1>
          <p>Ride & FLy is your hassel-free solution to rider and share your way to airport. This is the app where you can share your journey and fun with fellow buddies as well as the expenses.</p>
        </div>
      </div>
    </main>
  )
}

export default Landing
