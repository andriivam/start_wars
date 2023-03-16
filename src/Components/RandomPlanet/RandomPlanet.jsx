import React, { useState, useEffect } from 'react';
import './RandomPlanet.css';
import Loader from '../Loader/Loader.jsx';
import ErrorsIndicator from '../Errors/ErrorsIndicator.jsx';
import PlanetView from './PlanetView';
// import { getOnePlanet } from '../../apiClient.mjs';


export default function RandomPlanet() {

    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // console.log(error, 'error')

    // console.log(loading, 'loading');

    const getOnePlanet = async () => {
        const id = Math.floor(Math.random() * 30) + 3;

        try {
            const res = await fetch(`https://swapi.dev/api/planets/${id}/`)
            if (!res.ok) {
                throw new Error(`Request failed with status code ${res.status}`);
            }
            const data = await res.json();
            setPlanet({ data, id });
            setError(null);
            return data;
        }
        catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getOnePlanet();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (!planet && loading) {
        return <Loader />
    }

    if (error !== null && !loading) {
        return <ErrorsIndicator />
    };

    const { data, id } = planet;

    return (

        <div className="random-planet jumbotron rounded">
            <PlanetView data={data} id={id} />
        </div>
    )
}

