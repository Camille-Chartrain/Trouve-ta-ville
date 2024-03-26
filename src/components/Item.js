const Item = ({ ville, CP, pop }) => {

    return (
        <section className="detailCity">
            <p>{ville}</p>
            <p >Code Postal: {CP}</p>
            <p >population: {pop}</p>
        </section>
    );
};

export default Item;