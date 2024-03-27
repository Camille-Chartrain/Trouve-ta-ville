import { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";
import ville2 from "../public/ville2.png";


const FindCity = () => {
    let [searchCity, setSearchCity] = useState("");
    console.log('searchCity: ', searchCity)
    let [loading, setLoading] = useState(false);
    let [format, setFormat] = useState(false);


    return (
        <>
            <section id="titre">
                <img src={ville2} />
                <nav>
                    <h1>Trouve ta ville !</h1>
                </nav>
            </section>
            <nav>
                <h2>Recherche par nom de commune</h2>
            </nav>
            <Search
                setSearchCity={setSearchCity}
                setLoading={setLoading}
                loading={loading}
                format={format}

                setFormat={setFormat}
            />
            <List
                searchCity={searchCity}
                format={format}
            />
        </>
    );
};

export default FindCity;