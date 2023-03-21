
import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import PeoplePage from './Components/PeoplePage/PeoplePage';
import PlanetPage from './Components/PlanetPage/PlanetPage';
import StarshipPage from './Components/StarshipPage/StarshipPage';
// import StarshipInfo from './Components/StarshipPage/StarshipInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <div>
      <Router>
        <HomePage />
        <Routes>
          <Route path='/' element={<h1>Welcome to the Star Wars DB</h1>} />
          <Route path='/people' element={<PeoplePage />} />
          <Route exact path='/starships' element={<StarshipPage />} />
          <Route path='/planets' element={<PlanetPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
