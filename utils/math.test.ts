import { multiply, sub, sum } from './math';

test('adds 1 + 2 and returns 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 1 and returns 2', () => {
  expect(sub(3, 1)).toBe(2);
});

test('multiplies 2 * 3 and returns 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
