import { useState } from "react";

const Search = ({ setSearchCity, setFormat, format }) => {

    let [loading, setLoading] = useState(false);

    async function getCity(event) {
        event.preventDefault()
        console.log('getCity lancé');
        // Créer un objet FormData à partir du formulaire soumis
        const formData = new FormData(event.target);

        // Récupérer la valeur du champ de saisie "city" à partir de l'objet FormData
        const city = formData.get('city');


        if (city != '') {
            setLoading(true)

            try {
                const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${city}`);
                const dataCity = await response.json();
                console.log("ma response API", { dataCity });
                setSearchCity(dataCity);
                setLoading(false)
            }
            catch (error) {
                console.error(error);
                alert("Erreur de récupération");
            }
        }
    };

    function handleClick() {
        console.log(format);
        if (!format)
            setFormat(true)
        else if (format) setFormat(false)
        console.log(format);
    }

    return (
        <>
            <h2 id="titreRecherche">Nom de la commune / n° de département:</h2>
            <form onSubmit={getCity}>
                {/* not used
								<label htmlFor="Nom de la commune"></label>
								*/}
                <input
                    name="city"
                    type="text"
                    placeholder="Troyes, Bar-le-duc, Paris, ..."
                />
                <button
                    type="submit" className="searchButton">Lancer la recherche
                </button>
            </form>
            <section className="formResult">
                <div className="resultats">
                    <h3>Résultats</h3>
                </div>
                <button onClick={handleClick} type="submit">Changer le format</button>
            </section>
            <section>
                {loading && <p>En chargement ...</p>}
            </section>

        </>
    );
};

export default Search;
