const { sum } = require('../src/index');
// Sum 2 nums together

// Jest tests are structed like...
// Describe block
   // Test block
        // Expect

// test('add 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// Test with describe block
describe('Test adding two numbers together', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });
});
