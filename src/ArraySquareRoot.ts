const hasSquareRoot = (value: number): boolean =>
  Number.isInteger(Math.sqrt(value));

const squareNumber = (value: number): number => {
  return Math.pow(value, 2);
};

const squareOrRootValue = (value: number): number => {
  if (hasSquareRoot(value)) return Math.sqrt(value);

  return squareNumber(value);
};

const toSquareOrRoot = (input: Array<number>): number[] =>
  input.map(squareOrRootValue);

export default toSquareOrRoot;
