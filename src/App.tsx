import React from 'react';
import './App.css';
import Main from './Utilities/Main/Main';
import { Routes, Route, Link } from "react-router-dom";
import Download from './Utilities/Download/Download';
import RequirementModal from './Utilities/RequirementModal/RequirementModal';
import Tutorials from './Utilities/Tutorials/Tutorials';
import { Footer } from './Utilities/Footer/Footer';

//// "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test", 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/download" element={<Download />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
