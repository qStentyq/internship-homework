
//4. Check for Errors
//Write a function that throws an error when given invalid input.
//Use Jest to test if it throws the expected error.
const stringOrError = require('./stringOrError');
const { describe, test, expect } = require('@jest/globals');
describe('stringDescribe', () => {
    test('returns the concatenated string', () => {
      expect(stringOrError('hello', 'world')).toBe('helloworld');
    });
  
    test('throws an error when given non-string arguments', () => {
      expect(() => stringOrError(1, 2));
      expect(() => stringOrError(null, 'world')).toThrow(
        'Both arguments must be strings'
      );
      expect(() => stringOrError(undefined, 'world')).toThrow(
        'Both arguments must be strings'
      );
    });
  })