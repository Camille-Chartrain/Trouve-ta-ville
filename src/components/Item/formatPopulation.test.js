import formatPopulation from "./formatPopulation";

describe('formatPopulation', () => {
    test("pour une popultation d'au moins 1 milion d'habitants, retourner le nombre divisé par 1 milion, avec une virgule comme marqueur de décimal et le caractère M", () => {
        const result = formatPopulation(1234567)
        expect(result).toBe('1,23 M')
    });
    test("pour une popultation d'au moins 1000 d'habitants, retourner le nombre divisé par 1000, avec une virgule comme marqueur de décimal et le caractère K", () => {
        const result = formatPopulation(1234)
        expect(result).toBe('1,23 K')
    });
    test("pour une population inférieure à 1000 habitants, retourner le nombre d'habitant inchangé", () => {
        const result = formatPopulation(123)
        expect(result).toBe("123")
    });
})