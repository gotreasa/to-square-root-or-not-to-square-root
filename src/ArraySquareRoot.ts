const hasSquareRoot = (value: number): boolean =>
  Number.isInteger(Math.sqrt(value));

const toSquareOrRoot = (input: Array<number>): number[] => {
  return input.map((value) => {
    if (hasSquareRoot(value)) return Math.sqrt(value);

    return Math.pow(value, 2);
  });
};

export default toSquareOrRoot;
