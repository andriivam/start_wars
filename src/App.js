
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import RandomPlane from './Components/RandomPlanet/RandomPlanet';
import ItemList from './Components/ItemList/ItemList';
import PersonDetails from './Components/PersonDetails/PersonDetails';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const selectedPersonId = (id) => {
    setSelectedPerson(id);
    console.log(id, 'id from app')
  };

  return (
    <div>
      <Header />
      <RandomPlane />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList selectedPerson={selectedPersonId} />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPerson={selectedPerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
