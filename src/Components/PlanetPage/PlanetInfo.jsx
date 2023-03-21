import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetContext.jsx';
// import './PersonDetails.css';
import Loading from '../Loader/Loader.jsx';

export default function PlanetInfo({ selectedPlanet }) {

    const { planet } = useContext(PlanetContext);

    if (!selectedPlanet) {
        return;
    }

    if (!planet) {
        return <Loading />
    }

    const { name, climate, diameter, population, gravity, rotation_period } = planet;

    return (
        <div className="person-details card">
            <img className="person-image" src={`https://starwars-visualguide.com/assets/img/planets/${selectedPlanet}.jpg`} alt="hero" />
            <div className="card-body">
                <h4>
                    {name}
                </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">
                            Climate
                        </span>
                        <span>
                            {climate}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Diameter
                        </span>
                        <span>
                            {diameter}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Population
                        </span>
                        <span>
                            {population}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Gravity
                        </span>
                        <span>
                            {gravity}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Rotation Period
                        </span>
                        <span>
                            {rotation_period}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
