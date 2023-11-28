import toSquareOrRoot from '../../src/ArraySquareRoot';

describe('To Square or Root', () => {
  test('should return [1, 1] for the input [1, 1]', () => {
    expect(toSquareOrRoot([1, 1])).toEqual([1, 1]);
  });

  test('should return [1, 1, 1] for the input [1, 1, 1]', () => {
    expect(toSquareOrRoot([1, 1, 1])).toEqual([1, 1, 1]);
  });

  test('should return [2, 3, 4] for the input [4, 9, 16]', () => {
    expect(toSquareOrRoot([4, 9, 16])).toEqual([2, 3, 4]);
  });

  test('should return [5, 6] for the input [25, 36]', () => {
    expect(toSquareOrRoot([25, 36])).toEqual([5, 6]);
  });

  test('should return [9, 4] for the input [3, 2]', () => {
    expect(toSquareOrRoot([3, 2])).toEqual([9, 4]);
  });

  test('should return [289, 1369, 169] for the input [17, 37, 13]', () => {
    expect(toSquareOrRoot([17, 37, 13])).toEqual([289, 1369, 169]);
  });
});
