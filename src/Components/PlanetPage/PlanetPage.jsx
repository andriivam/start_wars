import React, { useState } from 'react';
import Row from '../Row.jsx'
import PlanetList from './PlanetList.jsx';
import PlanetInfo from './PlanetInfo.jsx';
import { PlanetProvider } from '../context/PlanetContext.jsx';


export default function PlanetPage() {
    const [selectedPlanet, setSelectedPlanet] = useState(2);

    const selectedPlanetId = (id) => {
        setSelectedPlanet(id);
    };

    return (
        <PlanetProvider selectedPlanet={selectedPlanet}>
            <>
                <Row left={<PlanetList selectedPlanetId={selectedPlanetId} />} right={<PlanetInfo selectedPlanet={selectedPlanet} />} />
            </>
        </PlanetProvider>

    )
}
