import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Startups from './components/Startups';
import QuantumComputing from './components/QuantumComputing';
import Placements from './components/Placements';
import Recognitions from './components/Recognitions';
import Facilities from './components/Facilities';
import CampusLife from './components/CampusLife';
import BottomBar from './components/BottomBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Startups />
      <QuantumComputing />
      <Placements />
      <Recognitions />
      <Facilities />
      <CampusLife />
      <BottomBar />
    </div>
  );
}

export default App;
