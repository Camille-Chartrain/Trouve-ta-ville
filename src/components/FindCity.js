import { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";


const FindCity = () => {
    let [searchCity, setSearchCity] = useState("");
    console.log('searchCity: ', searchCity)

    return (
        <>
            <h1>Recherche par nom de commune</h1>
            <Search
                setSearchCity={setSearchCity} />
            <List
                searchCity={searchCity}
            />
        </>
    );
};

export default FindCity;