
import Topbar from './topbar/topbar.jsx';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx'
import Settings from './pages/settings/Settings.jsx'

import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import {useContext} from 'react';
import {Context} from './context/Context.js'


function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <Topbar/>

       <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route exact path="/register" element = {user ? <Home/> : <Register />  }/>
          <Route exact path="/login" element = {user ? <Home/> :<Login/> } />
         <Route exact path="/write" element = {user ? <Write/> : <Register />} />
         <Route exact path="/settings"  element ={user ?  <Settings/>:<Register/>} />
         <Route exact path="/post/:postId" element ={<Single/>}  />
    
        </Routes>
          
          
       

    </Router>
    
  );
}

export default App;
