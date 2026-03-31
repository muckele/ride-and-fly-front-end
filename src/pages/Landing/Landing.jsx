import { Link } from 'react-router-dom'

// css
import './Landing.css'

const Landing = ({ user }) => {
  return (
    <main className='landing-page'>
      <section className='landing-hero'>
        <div className='landing-copy'>
          <p className='landing-eyebrow'>Airport carpooling, reworked</p>
          <h1>Share the ride. Keep the plan polished.</h1>
          <p className='landing-intro'>
            Ride & Fly helps airport-bound travelers split the trip, reduce the stress,
            and coordinate in one clean, simple place.
          </p>

          <div className='landing-actions'>
            {user ? (
              <>
                <Link className='landing-primary' to='/posts'>Browse Rides</Link>
                <Link className='landing-secondary' to='/posts/new'>Post a Trip</Link>
              </>
            ) : (
              <>
                <Link className='landing-primary' to='/auth/signup'>Create Account</Link>
                <Link className='landing-secondary' to='/auth/login'>Log In</Link>
              </>
            )}
          </div>

          <div className='landing-metrics'>
            <div className='metric-card'>
              <span>Find</span>
              <strong>Relevant routes fast</strong>
            </div>
            <div className='metric-card'>
              <span>Message</span>
              <strong>Coordinate before takeoff</strong>
            </div>
            <div className='metric-card'>
              <span>Share</span>
              <strong>Costs, timing, and plans</strong>
            </div>
          </div>
        </div>

        <div className='landing-spotlight'>
          <div className='landing-panel'>
            <p className='landing-panel-label'>How It Works</p>
            <h2>From route to ride share in minutes.</h2>
            <ol className='landing-steps'>
              <li>Post your airport trip with timing, terminal, and rider details.</li>
              <li>Browse compatible rides or message another traveler directly.</li>
              <li>Confirm the trip and keep the full conversation in one thread.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
