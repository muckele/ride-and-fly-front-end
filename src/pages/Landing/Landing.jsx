// css
import './Landing.css'

const Landing = ({ user }) => {
  return (
    <main className='container'>
      {/* <h1>Hello, {user ? user.name : 'friend'}</h1> */}
      <div className='container-left'>
        <div className='content'>
          <h1 id="hover-h1">Share a ride<br/>Make new friends!</h1>
          <div id="slogan-landing">
          <p>Ride & Fly is your hassle-free solution to carpooling your way to airport. This is the app where you can share your journey and fun with fellow car pals as well as the expenses while being ecofriendly.</p></div>
        </div>
      </div>
    </main>
  )
}

export default Landing
