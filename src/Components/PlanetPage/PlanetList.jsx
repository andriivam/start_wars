import React, { useState, useEffect } from 'react';
// import './ItemList.css';
import Loading from '../Loader/Loader.jsx';


export default function ItemList({ selectedPlanetId }) {

    const [planetList, setPlanetList] = useState(null);

    const getAllPlanet = async () => {
        try {
            const res = await fetch(`https://swapi.dev/api/planets/`)
            const data = await res.json();
            const results = data.results;
            const ids = results.map((item) => {
                const url = new URL(item.url);
                return url.pathname.split('/').filter(Boolean).pop();
            });
            setPlanetList({ data, ids });
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllPlanet();
    }, [selectedPlanetId]);

    if (!planetList) {
        return <Loading />
    };

    const { data, ids } = planetList;

    const handleClick = (id) => {
        selectedPlanetId(id);
    }

    return (
        <ul className="item-list list-group">
            {data.results.map((item, id) => {
                return (
                    <li className="list-group-item" key={id} onClick={() => handleClick(ids[item.url.split('/').filter(Boolean).pop() - 1])}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
    )
}
