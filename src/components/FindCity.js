import { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";


// const maVille = [{
//     "nom": "Nantes",
//     "code": "44109",
//     "_score": 4.23204,
//     "departement": {
//         "code": "44",
//         "nom": "Loire-Atlantique"
//     }
// }]
// console.log(maVille[0].nom);



const FindCity = () => {
    let [searchCity, setSearchCity] = useState("");
    console.log('searchCity: ' + searchCity)

    // useEffect(() => {
    //     console.log('useeffect handleSearch appelé');
    //     handleSearch();
    // }, [])

    return (
        <>
            <Search
                setSearchCity={setSearchCity} />
            <List
                // data={maVille}
                searchCity={searchCity}
            />
        </>
    );
};

export default FindCity;