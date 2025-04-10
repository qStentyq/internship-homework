
function stringOrError(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
      return new Error('Both arguments must be strings');
    }
    return a + b;
  }

  module.exports = stringOrError;