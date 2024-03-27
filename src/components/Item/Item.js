import formatPopulation from "./formatPopulation";

const Item = ({ ville, CP, pop, departement, format }) => {

    return (
        <section className="detailCity">
            <p>{ville} - {departement}</p>
            <p className="item">Code Postal: {CP}</p>
            {format && <p >population: {formatPopulation(pop)}</p>}
            {!format && <p >population: {pop}</p>}
        </section>
    );
};

export default Item;