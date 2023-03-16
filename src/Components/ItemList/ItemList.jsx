import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Loading from '../Loader/Loader.jsx';


export default function ItemList({ selectedPersonId }) {

    const [peopleList, setPeopleList] = useState(null);

    const getAllPeople = async () => {
        try {
            const res = await fetch(`https://swapi.dev/api/people/`)
            const data = await res.json();
            const results = data.results;
            const ids = results.map((item) => {
                const url = new URL(item.url);
                return url.pathname.split('/').filter(Boolean).pop();
            });
            setPeopleList({ data, ids });
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllPeople();
    }, []);


    if (!peopleList) {
        return <Loading />
    };

    const { data, ids } = peopleList;

    const handleClick = (id) => {
        selectedPersonId(id);
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
