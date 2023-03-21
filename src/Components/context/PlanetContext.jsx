import React, { createContext, useState, useEffect } from "react";

export const PlanetContext = createContext(null);

export const PlanetProvider = ({ children, selectedPlanet }) => {
    const [planet, setPlanet] = useState(null);

    const getOnePlanet = async (id) => {
        try {
            const res = await fetch(`https://swapi.dev/api/planets/${id}/`)
            const data = await res.json();
            setPlanet(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (selectedPlanet) {
            getOnePlanet(selectedPlanet);
        }
    }, [selectedPlanet]);

    const updatePlanet = () => {
        if (selectedPlanet) {
            getOnePlanet(selectedPlanet);
        }
    };

    return (
        <PlanetContext.Provider value={{ planet, updatePlanet }}>
            {children}
        </PlanetContext.Provider>
    );
};