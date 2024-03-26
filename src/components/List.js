import Item from "./Item";

const List = ({ searchCity }) => {
    console.log(searchCity);

    if (searchCity != "") {
        return (
            searchCity.map(eachData => {
                console.log("mes data" + eachData);
                return (
                    <Item
                        ville={eachData.nom}
                        CP={eachData.codesPostaux[0]
                        }
                        pop={eachData.population}
                    />)
            })
        );
    }
};

export default List;