import React, { createContext, useState, useEffect } from "react";

export const StarshipContext = createContext(null);

export const StarshipProvider = ({ children, selectedStarship }) => {
    const [starship, setStarship] = useState(null);

    const getOneStarship = async (id) => {
        try {
            const res = await fetch(`https://swapi.dev/api/starships/${id}/`)
            const data = await res.json();
            setStarship(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (selectedStarship) {
            getOneStarship(selectedStarship);
        }
    }, [selectedStarship]);

    const updateStarship = () => {
        if (selectedStarship) {
            getOneStarship(selectedStarship);
        }
    };

    return (
        <StarshipContext.Provider value={{ starship, updateStarship }}>
            {children}
        </StarshipContext.Provider>
    );
};