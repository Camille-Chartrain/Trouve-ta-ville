

const Search = ({ setSearchCity }) => {

    async function getCity(event) {

        console.log('getCity lancé');
        //console.log(event.target.form[0].value);
        const city = event.target.form[0].value;
        event.preventDefault()

        if (city != '') {

            try {
                const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${city}`);
                const dataCity = await response.json();
                console.log("ma response API", { dataCity });
                setSearchCity(dataCity);
            }
            catch (error) {
                console.error(error);
                alert("Erreur de récupération");
            }
        }
    };

    return (
        <>
            <h1>Recherche par nom de commune</h1>
            <h2>Nom de la commune</h2>
            <form onClick={getCity}>
                <label htmlFor="sort-form__search"></label>
                <input
                    type="text"
                    id="sort-form__search"
                    placeholder="Troyes, Bar-le-duc, Paris, ..." />
                <button

                    type="submit" className="searchButton">Lancer la recherche
                </button>
            </form>
            <section className="formResult">
                <h3>Résultats</h3>
                <button type="submit">Changer le format</button>
            </section>

        </>
    );
};

export default Search;