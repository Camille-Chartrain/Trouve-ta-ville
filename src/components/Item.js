const Item = ({ ville, CP, pop, departement }) => {

    return (
        <section className="detailCity">
            <p>{ville} - {departement}</p>
            <p >Code Postal: {CP}</p>
            <p >population: {pop}</p>
        </section>
    );
};

export default Item;