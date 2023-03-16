
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import RandomPlane from './Components/RandomPlanet/RandomPlanet';
import ItemList from './Components/ItemList/ItemList';
import PersonDetails from './Components/PersonDetails/PersonDetails';
import { PersonProvider } from './Components/context/PersonContext';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const selectedPersonId = (id) => {
    setSelectedPerson(id);
  };


  return (
    <PersonProvider selectedPerson={selectedPerson}>
      <div>
        <Header />
        <RandomPlane />
        <div className="row row mb2 button-row">
          <button className="toggle-planet btn btn-warning btn-lg">Toggle Random Planet</button>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList selectedPersonId={selectedPersonId} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPerson={selectedPerson} />
          </div>
        </div>
      </div>
    </PersonProvider>
  );
}

export default App;
