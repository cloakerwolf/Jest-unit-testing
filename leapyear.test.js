let leapyear = require('./leapyear.js');

describe('leapyear module test', () => {
    test('divide 1600 by 4', () => {
        expect(leapyear(1600,4)).toBe(true);
    });
    test('divide 1000 by 100', () => {
        expect(leapyear(1000,100)).toBe(false);
    })
    test('divide 800 by 400', () => {
        expect(leapyear(800, 400)).toBe(true);
    })
})