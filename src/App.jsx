import ThirdStage from './pages/thirdStage';
import FinalStage from './pages/finalStage';
import SecondStage from './pages/secondStage';
import FirstStage from './pages/firstStage';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstStage/>}/>
        <Route exact path="/second" element={<SecondStage/>}/>
        <Route exact path="/third" element={<ThirdStage/>}/>
        <Route exact path="/final" element={<FinalStage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
