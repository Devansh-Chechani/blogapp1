import  './singlePost.css';
import {useEffect,useState} from 'react';

import { useLocation,Link } from 'react-router-dom';
import axios from 'axios';

export default function SinglePost() {
  const location = useLocation()
  const  path  =  location.pathname.split("/")[2]
  const [post,setPost] = useState({})

  useEffect(()=>{
     const getPost = async()=>{
       const res = await axios.get("/posts/"+path)
       setPost(res.data)
     };
     getPost()
    
  })
  return (
    <div className = "singlePost">
     <div className="singlePostWrapper">
      {
        post.photo &&(
          <img className="singlePostImg"
          src = {post.photo}
          alt=""
       />
        )
      }
       

       <h1 className = "singlePostTitle">{post.title}

       <div className="singlePostEdit">
          <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i class="singlePostIcon fa-solid fa-trash"></i>
       </div>
       </h1>

       <div className="singlePostInfo">
        <span className="singlePostAuthor">Author :
        <Link to = {`/?user=${post.username}`} className = 'link'> <b>{post.username}</b> </Link>
        
         </span>
        <span className="singlePostDate">{new Date(post.updatedAt).toDateString()}</span>

       </div>
       <p className = "singlePostDesc">{post.desc}
        </p>
       
    </div>
    </div>
  )
}
