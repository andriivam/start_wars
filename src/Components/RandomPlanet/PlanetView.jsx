import React from 'react'

export default function PlanetView({ data, id }) {
    return (
        <>
            <img className="planet-image" alt="planet"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{data.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{data.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{data.rotation_period}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{data.diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
