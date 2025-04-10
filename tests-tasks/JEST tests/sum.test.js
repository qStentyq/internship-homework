
const sum = require('./sum');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 1 + 2 as string', () => {
  expect(sum('1', '2')).toBe(3);
});

test('adds 1 + null', () => {
  expect(sum('1', null)).toBe(3);
});

test('adds 1 + undefined', () => {
  expect(sum('1', undefined)).toBe(3);
});


//DIFERENCE BETWEEN toBe and toEqual
// toBe is used for primitive values and toEqual is used for reference values
//In the example bellow both tests will pass because toEqual will check recursively
//if the values are the same
// but toBe will check if the references are the same

const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});

