const apiBase = `https://swapi.dev/api/`;

//get all people
const getAllPeople = async (url) => {
    try {
        const res = await fetch(`${apiBase}${url}`)
        const data = await res.json();
        console.log(data)
        return data.results;
    }
    catch (error) {
        console.error(error);
    }
}

//get one person
const getOnePerson = async (id) => {
    try {
        const res = await fetch(`${apiBase}people/${id}/`)
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

//get all planets
const getAllPlanets = async (url) => {
    try {
        const res = await fetch(`${apiBase}${url}`)
        const data = await res.json();
        console.log(data);
        return data.results;
    }
    catch (error) {
        console.error(error);
    }
}

//get one planet
const getOnePlanet = async (id) => {
    try {
        const res = await fetch(`${apiBase}planets/${id}/`)
        const data = await res.json();
        console.log(data);
        return data.results;
    }
    catch (error) {
        console.error(error);
    }
}

//get all starships
const getAllStarships = async (url) => {
    try {
        const res = await fetch(`${apiBase}${url}`)
        const data = await res.json();
        console.log(data);
        return data.results;
    }
    catch (error) {
        console.error(error);
    }
}

//get one starship
const getOneStarship = async (id) => {
    try {
        const res = await fetch(`${apiBase}starships/${id}/`)
        const data = await res.json();
        console.log(data);
        return data.results;
    }
    catch (error) {
        console.error(error);
    }
};

export { getAllPeople, getOnePerson, getAllPlanets, getOnePlanet, getAllStarships, getOneStarship };