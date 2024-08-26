function formatPopulation(number) {
    if (number >= 1000000) {
        number = number / 1000000;
        return number.toString().slice(0, 4).replace(".", ",") + " M";
    }
    else if (number >= 1000) {
        number = number / 1000;
        return number.toString().slice(0, 4).replace(".", ",") + " K";
    }
    else if (number < 1000) {
        return number.toString()
    }
};

export default formatPopulation