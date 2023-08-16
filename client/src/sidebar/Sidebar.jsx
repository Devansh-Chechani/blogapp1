import './sidebar.css'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Sidebar() {
  const [cats,setCats] = useState([])

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get('/categories')
      setCats(res.data)
    };
    getCats()
  },[])
  return (
    <div className = "sidebar">
     <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        
         <img className = "sidebarImg"
          src="https://i.pinimg.com/originals/95/e5/e4/95e5e4830fc2f8102a6679f6b4502763.jpg"
          alt=""
        />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt architecto. 
              </p>
     </div>

       <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className = "SidebarList">
            <div className="ans">
              {
                 cats.map(c=>(
              <Link to = {`/?cat=${c.name}`} className = 'link'>
                     
                 <li className = "sidebarListItem">{c.name}</li>
                
              
              </Link>
               ))
            
              }
              
            
            </div>
             
        </ul>

        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
