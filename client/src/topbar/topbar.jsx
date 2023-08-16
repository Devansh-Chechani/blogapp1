import './topbar.css'
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {Context} from '../context/Context.js';

export default function () {
  const {user} = useContext(Context);
  return (
    <div className = 'top'>
     <div className="topLeft">

      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i  className="topIcon fa-brands fa-square-twitter"></i>
      <i  className="topIcon fa-brands fa-pinterest-p"></i>
      <i  className="topIcon fa-brands fa-square-instagram"></i>
     </div>

     <div className="topCenter">
         <ul className = "topList">
            <li className = 'topListItem'> 
            <Link to = '/' className= 'link'>  HOME</Link> 
            </li>

             
             <li className = 'topListItem'> 
            <Link to = '/' className= 'link'>  ABOUT </Link> 
            </li>

             <li className = 'topListItem'> 
            <Link to = '/' className= 'link'>  CONTACT</Link> 
            </li>

             <li className = 'topListItem'> 
            <Link to = '/write' className= 'link'>  WRITE</Link> 
            </li>

             <li className = 'topListItem'> 
           {user && "LOGOUT"}
            </li>
           
         </ul>
     </div>

     <div className="topRight">
      {
        user ? (
            <img className = "topImg" src = "https://img.freepik.com/free-photo/tender-attractive-feminine-girl-excited-classmate-invited-prom-smiling-happily-dream-come-true-standing-touched-passionate-close-eyes-joyfully-cheering-press-hands-cheeks-white-background_176420-35012.jpg?size=626&ext=jpg&ga=GA1.2.633027007.1690210274&semt=aiss"
      alt ="" />

        ) 
        :
        (
          <ul className = "topList">
            <li className = 'topListItem'> 
            <Link to = '/register' className = 'link'> REGISTER</Link>
            </li>
          
           <li className = 'topListItem'> 
             <Link to = '/login' className = 'link'> LOGIN</Link>
            </li>
         
          </ul>
         
        )
      }
     
      <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
  )
}
