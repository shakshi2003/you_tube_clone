import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './Component/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import Allroutes from './Allroutes'
import { BrowserRouter as Router } from 'react-router-dom';
import Drawersliderbar from '../src/Component/Leftsidebar/Drawersliderbar'
import Createeditchannel from './Pages/Channel/Createeditchannel';
import Videoupload from './Pages/Videoupload/Videoupload';
import { fetchallchannel } from './action/channeluser';
import { getallvideo } from './action/video';
import { getallcomment } from './action/comment';
import { getallhistory } from './action/history.js';
import { getalllikedvideo } from './action/likedvideo.js';
import { getallwatchlater } from './action/watchlater.js';
function App() {
  const [toggledrawersidebar, settoggledrawersidebar] = useState({
    display: "none"
  });
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchallchannel())
    dispatch(getallvideo())
    dispatch(getallcomment())
    dispatch(getallhistory())
    dispatch(getalllikedvideo())
    dispatch(getallwatchlater())
  },[dispatch])
  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      settoggledrawersidebar({
        display: "flex"
      });
    }
    else {
      settoggledrawersidebar({
        display: "none"
      });
    }
  }
  const [editcreatechanelbtn,seteditcreatechanelbtn]=useState(false);
  const [videouploadpage,setvideouploadpage]=useState(false);
  return (
    <Router>
      {
        videouploadpage && <Videoupload setvideouploadpage={setvideouploadpage}/>
      }
      {editcreatechanelbtn && (
        <Createeditchannel seteditcreatechanelbtn={seteditcreatechanelbtn}/>
      )}
      <Navbar seteditcreatechanelbtn={seteditcreatechanelbtn} toggledrawer={toggledrawer} />
      <Drawersliderbar toggledraw={toggledrawer} toggledrawersidebar={toggledrawersidebar}/>
      <Allroutes seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage}/>
    </Router>
  );
}

export default App;
