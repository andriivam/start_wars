import React, { useState, useEffect } from 'react';
// import './ItemList.css';
import Loading from '../Loader/Loader.jsx';

export default function ItemList({ selectedStarshipId }) {

    const [starshipsList, setStarshipsList] = useState(null);

    const getAllStarships = async () => {
        try {
            const res = await fetch(`https://swapi.dev/api/starships/`);
            const data = await res.json();
            const results = data.results.map((item) => ({
                ...item,
                id: item.url.split('/').filter(Boolean).pop(),
            }));
            setStarshipsList({ data: { results }, ids: results.map((item) => item.id) });
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllStarships();
    }, [selectedStarshipId]);

    if (!starshipsList) {
        return <Loading />;
    }

    const { data } = starshipsList;

    const handleClick = (starship) => {
        selectedStarshipId(starship.id);
        console.log(starship.id);
    };

    return (
        <ul className="item-list list-group">
            {data.results.map((starship, id) => {
                return (
                    <li
                        className="list-group-item"
                        key={id}
                        onClick={() => handleClick(starship)}
                    >
                        {starship.name}
                    </li>
                );
            })}
        </ul>
    );
}