const toSquareOrRoot = (input: Array<number>): number[] => {
  return input.map((value) => Math.sqrt(value));
};

export default toSquareOrRoot;
