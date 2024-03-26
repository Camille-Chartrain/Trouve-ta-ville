import Item from "./Item";

const List = ({ searchCity }) => {
    console.log(searchCity);
    // let [searchTitle, setSearchTitle] = useState("");
    // console.log(`searchTitle = ${searchTitle}`)
    if (searchCity != "") {


        return (
            searchCity.map(eachData => {
                console.log("mes data" + eachData);
                return (
                    <Item
                        ville={eachData.nom}
                        CP={eachData.code}
                        pop={eachData._score}
                    />)
            })
        );
    }
};

export default List;