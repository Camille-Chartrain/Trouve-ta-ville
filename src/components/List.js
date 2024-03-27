import Item from "./Item";

const List = ({ searchCity }) => {
    console.log(searchCity);

    if (searchCity != "") {
        return (
            searchCity.map(eachData => {
                console.log("mes data" + eachData);
                return (
                    <Item
                        key={eachData.code}
                        ville={eachData.nom}
                        CP={eachData.codesPostaux[0]
                        }
                        departement={eachData.codeDepartement}
                        pop={eachData.population}
                    />)
            })
        );
    }
};

export default List;