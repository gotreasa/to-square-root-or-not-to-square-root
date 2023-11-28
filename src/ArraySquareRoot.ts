const hasSquareRoot = (value: number): boolean =>
  Number.isInteger(Math.sqrt(value));

const squareNumber = (value: number): number => {
  return Math.pow(value, 2);
};

const squareOrRootValue = (value: number): number =>
  hasSquareRoot(value) ? Math.sqrt(value) : squareNumber(value);

const toSquareOrRoot = (input: Array<number>): number[] =>
  input.map(squareOrRootValue);

export default toSquareOrRoot;
