import Item from "./Item/Item";

const List = ({ searchCity, format }) => {
    console.log(searchCity);

    if (searchCity != "") {
        return (
            searchCity.map(eachData => {
                console.log("mes data", eachData);
                return (
                    <Item
                        key={eachData.code}
                        ville={eachData.nom}
                        CP={eachData.codesPostaux[0]}
                        departement={eachData.codeDepartement}
                        pop={eachData.population}
                        format={format}
                    />)
            })
        );
    }
};

export default List;