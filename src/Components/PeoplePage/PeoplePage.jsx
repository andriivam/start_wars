import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import PersonDetails from '../PersonDetails/PersonDetails.jsx';
import { PersonProvider } from '../context/PersonContext';

export default function PeoplePage() {

    const [selectedPerson, setSelectedPerson] = useState(1);

    const selectedPersonId = (id) => {
        setSelectedPerson(id);
    };

    return (
        <PersonProvider selectedPerson={selectedPerson}>
            <>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList selectedPersonId={selectedPersonId} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails selectedPerson={selectedPerson} />
                    </div>
                </div>
            </>
        </PersonProvider>

    )
}
