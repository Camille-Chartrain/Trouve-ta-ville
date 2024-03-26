import Item from "./Item";

const List = ({ data }) => {
    console.log(data);
    // let [searchTitle, setSearchTitle] = useState("");
    // console.log(`searchTitle = ${searchTitle}`)

    return (
        data.map(eachData => {
            console.log("mes data" + eachData);
            return (
                <Item

                    ville={eachData.nom}
                    CP={eachData.code}
                    pop={eachData._score}
                />)
        })
    );
};

export default List;