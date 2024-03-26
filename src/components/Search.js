

const Search = ({ setSearchCity }) => {

    const handleSearch = (event) => {
        console.log('handlesearch lancé');
        console.log(event.target.form[0].value);
        event.preventDefault()
        setSearchCity(event.target.form[0].value)
    }

    return (
        <>
            <h1>Recherche par nom de commune</h1>
            <h2>Nom de la commune</h2>
            <form onClick={handleSearch}>
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