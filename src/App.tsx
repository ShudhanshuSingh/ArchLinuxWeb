import React from 'react';
import './App.css';
import Main from './Utilities/Main/Main';
import { Routes, Route, Link } from "react-router-dom";
import Download from './Utilities/Download/Download';
import RequirementModal from './Utilities/RequirementModal/RequirementModal';
import Tutorials from './Utilities/Tutorials/Tutorials';
import { Footer } from './Utilities/Footer/Footer';
import Navbar from './Utilities/Navbar/Navbar';
import { useLocation } from 'react-router-dom'
import SubNav from './Utilities/SubNav/SubNav';
import Changelog from './Utilities/Changelog/Changelog';
import ChangelogModal from './Utilities/ChangelogModal/ChangelogModal';



//// "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test", 
function App() {
  const [currentLocation,setCurrentLocation] = React.useState('/')
  // React.useEffect(()=>{
  //   setLocation(window.location.pathname)
  //   console.log(location)
  // },[window.location.pathname])
  const location = useLocation();
  const loc = () =>{
    setCurrentLocation(location.pathname)
  }
  React.useEffect(()=>{  
    loc()
  },[location])

  return (
    <div className="App">
      {
        currentLocation === "/"? (
          <Navbar />
        ):(
          <SubNav nameUrl={currentLocation} /> 
        )
      }
      <ChangelogModal />
      <Routes>
        <Route path="/download" element={<Download />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
