import './single.css'
import Sidebar from '../../sidebar/Sidebar.jsx';
import SinglePost from '../../singlePost/SinglePost.jsx';

export default function Single() {
  return (
    <div className = "single"> 
    
     <SinglePost/>
      <Sidebar/>
    </div>
  )
}
