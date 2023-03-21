import React, { useContext } from 'react';
import { StarshipContext } from '../context/StarshipsContext.jsx';
import Loading from '../Loader/Loader.jsx';

export default function StarshipInfo({ selectedStarship }) {

    const { starship } = useContext(StarshipContext);

    if (!selectedStarship) {
        return;
    }

    if (!starship) {
        return <Loading />
    }

    const { name, length, crew, passengers, starship_class, manufacturer } = starship;

    return (
        <div className="person-details card">
            <img className="person-image" src={`https://starwars-visualguide.com/assets/img/starships/${selectedStarship}.jpg`} alt="hero" />
            <div className="card-body">
                <h4>
                    {name}
                </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">
                            Length
                        </span>
                        <span>
                            {length}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Crew
                        </span>
                        <span>
                            {crew}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Passengers
                        </span>
                        <span>
                            {passengers}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Starship Class
                        </span>
                        <span>
                            {starship_class}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Manufacturer
                        </span>
                        <span>
                            {manufacturer}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
