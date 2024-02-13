// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <div className='container-left'>
        <div className='bold-font'>
          <h1>SHARE JOURNEY<br/>SHARE FUN</h1>
          <p>Ride & FLy is your hassel-free solution to rider and share your way to airport. This is the app where you can share your journey and fun with fellow buddies as well as the expenses.</p>
        </div>
      </div>
    </main>
  )
}

export default Landing
