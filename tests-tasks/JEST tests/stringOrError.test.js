
//4. Check for Errors
//Write a function that throws an error when given invalid input.
//Use Jest to test if it throws the expected error.
const stringOrError = require('./stringOrError');
describe('stringDescribe', () => {
    test('returns the concatenated string', () => {
      expect(stringOrError('hello', 'world')).toBe('helloworld');
    });
  
    test('throws an error when given non-string arguments', () => {
      const invalidInputs = [
        [1, 2],
        [null, 'world'],
        [undefined, 'world'],
        ['hello', 42],
        [true, 'world'],
      ];
      invalidInputs.forEach(([arg1, arg2]) => {
        expect(() => stringOrError(arg1, arg2)).toThrow(
          'Both arguments must be strings'
        );
      });
    });
    test('throws an error when given insufficient arguments', () => {
      expect(() => stringOrError('hello')).toThrow('Both arguments must be strings');
      expect(() => stringOrError()).toThrow('Both arguments must be strings');
    });
  });
  