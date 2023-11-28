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
});
