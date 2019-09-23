let sum = require('./sum.js');


describe('sum module tests', () => {
    test('adding 1 and 2 gives 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adding -1 and 2 gives 1', () => {
        expect(sum(-1, 2)).toBe(1);
    });

    test('adding 1.5 and 2 gives 3.5', () => {
        expect(sum(1.5, 2)).toBe(3.5);
    });

    test(`'1' and 2 gives 3`, () => {
        expect(sum('1', 2)).toBe(3);
    });

    test(`1 give 1`, () => {
        expect(sum(1)).toBe(1);
    });

    test(`NaN adding`, () => {
        expect(sum('a', 1)).toBe(NaN);
    });
})
// simple adding
