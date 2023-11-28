const hasSquareRoot = (value: number): boolean =>
  Number.isInteger(Math.sqrt(value));

const squareNumber = (value: number): number => {
  return Math.pow(value, 2);
};

const toSquareOrRoot = (input: Array<number>): number[] => {
  return input.map((value) => {
    if (hasSquareRoot(value)) return Math.sqrt(value);

    return squareNumber(value);
  });
};

export default toSquareOrRoot;
