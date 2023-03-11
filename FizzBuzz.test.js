const check = require('./FizzBuzz');

describe('FizzBuzz',() => {
    it('should return number 1', () => {
        expect(check.FizzBuzz(1)).toBe(1);
    });
    it('should return Fizz', () => {
        expect(check.FizzBuzz(3)).toBe('Fizz');
    });
    it('should return Fizz', () => {
        expect(check.FizzBuzz(6)).toBe('Fizz');
    });
    it('should return Buzz', () => {
        expect(check.FizzBuzz(5)).toBe('Buzz');
    });
    it('should return Fizz-Buzz', () => {
        expect(check.FizzBuzz(15)).toBe('Fizz-Buzz');
    });
})