let divisable = require('./divisible.js');

describe('divisable module tests', () => {
    test('divide 9 by 3 returns Fizz', () => {
        expect(divisable(9,3)).toBe('Fizz');
    });
    test('divide 10 by 5 returns Buzz', () => {
        expect(divisable(10,5)).toBe('Buzz');
    });
    test('divide 15 by 3 and 5 returns FizzBuzz', () => {
        expect(divisable(15)).toBe('FizzBuzz');
    })
})