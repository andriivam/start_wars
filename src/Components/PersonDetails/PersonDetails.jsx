import React, { useContext } from 'react';
import { PersonContext } from '../context/PersonContext.jsx';
import './PersonDetails.css';
import Loading from '../Loader/Loader.jsx';

export default function PersonDetails({ selectedPerson }) {

    const { person } = useContext(PersonContext);

    if (!selectedPerson) {
        return;
    }

    if (!person) {
        return <Loading />
    }
    const { name, gender, birth_year, eye_color, height, mass } = person;

    return (
        <div className="person-details card">
            <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${selectedPerson}.jpg`} alt="hero" />
            <div className="card-body">
                <h4>
                    {name} {selectedPerson}
                </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">
                            Gender
                        </span>
                        <span>
                            {gender}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Birth Year
                        </span>
                        <span>
                            {birth_year}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Eye Color
                        </span>
                        <span>
                            {eye_color}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Mass
                        </span>
                        <span>
                            {mass}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Height
                        </span>
                        <span>
                            {height}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
