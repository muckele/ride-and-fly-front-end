// npm modules
import { Link } from 'react-router-dom'

// css 
import './PostCard.css'

const PostCard = ( props ) => {


  return (
    <div>
      <Link to={`/posts/${props.post._id}`}>
        <span>
          <h1>{props.post.createdAt}</h1>
        </span>
      </Link>
      <ul>
        <li>{props.post.author[0].name}</li>
        <li>{props.post.date}</li>
        <li>{props.post.time}</li>
        <li>{props.post.airport}</li>
        <li>{props.post.terminal}</li>
        <li>{props.post.dropOff}</li>
        <li>{props.post.partySize}</li>
      </ul>
      <span>

        {props.post.author[0]._id === props.user.profile &&
          <>
            <Link to={`/posts/${props.post._id}/edit`} state={props.post}>EDIT</Link>
          </>
        }

      </span>
    </div>
  )
}

export default PostCard