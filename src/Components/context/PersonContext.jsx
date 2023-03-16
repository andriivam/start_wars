import React, { createContext, useState, useEffect } from "react";

export const PersonContext = createContext(null);

export const PersonProvider = ({ children, selectedPerson }) => {
    const [person, setPerson] = useState(null);

    const getOnePerson = async (id) => {
        try {
            const res = await fetch(`https://swapi.dev/api/people/${id}/`)
            const data = await res.json();
            console.log(data);
            setPerson(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (selectedPerson) {
            getOnePerson(selectedPerson);
        }
    }, [selectedPerson]);

    const updatePerson = () => {
        if (selectedPerson) {
            getOnePerson(selectedPerson);
        }
    };

    return (
        <PersonContext.Provider value={{ person, updatePerson }}>
            {children}
        </PersonContext.Provider>
    );
};