import { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";
import ville2 from "../public/ville2-removebg.webp";
import ville1 from "../public/ville_mobile.webp";


const FindCity = () => {
    let [searchCity, setSearchCity] = useState("");
    console.log('searchCity: ', searchCity)
    let [format, setFormat] = useState(false);


    return (
        <>
            <nav id="titre">
                <img className="img_mobile"  src={ville1} alt="logo représentant une ville moderne"/>
                <img className="img_desktop" src={ville2} alt="logo représentant une ville moderne"/>

                <h1 className="titre">Trouve ta ville</h1>

            </nav>
            {/* <nav>
                <h2>Recherche par :<span className="buttonChoice" >nom de commune </span><span className="buttonChoice" >N° département</span></h2>

            </nav> */}
            <Search
                setSearchCity={setSearchCity}
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
