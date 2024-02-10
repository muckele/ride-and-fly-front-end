// npm modules
import { useParams, Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'


// components

//services
// import * as postService from '../../services/postService'


// css 
import './PostCard.css'

const PostCard = ( props ) => {


  // const { postId } = useParams()
  // const [post, setPost] = useState(null)

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const data = await postService.show(postId)
  //     setPost(data)
  //   }
  //   fetchPost()
  // }, [postId])



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