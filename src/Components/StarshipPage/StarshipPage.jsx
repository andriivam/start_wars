import React, { useState } from 'react';
import Row from '../Row.jsx';
import StarshipList from './StarshipList.jsx';
import StarshipInfo from './StarshipInfo.jsx';
import { StarshipProvider } from '../context/StarshipsContext.jsx';

export default function StarshipPage() {
    const [selectedStarship, setSelectedStarship] = useState(5);

    const selectedStarshipId = (id) => {
        setSelectedStarship(id);
    };

    return (
        <StarshipProvider selectedStarship={selectedStarship}>
            <>
                <Row left={<StarshipList selectedStarshipId={selectedStarshipId} />} right={<StarshipInfo selectedStarship={selectedStarship} />} />
            </>
        </StarshipProvider>

    )
}
