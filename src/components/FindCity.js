import { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";
import ville2 from "../public/ville2.png";
import chateau from "../public/chateau.png"


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
                <h2>Recherche par <span className="buttonChoice" >nom de commune </span><span className="buttonChoice" >département</span></h2>

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