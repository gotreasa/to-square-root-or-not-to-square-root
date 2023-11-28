const toSquareOrRoot = (input: Array<number>): number[] => {
  return input.map((value) => {
    if (Number.isInteger(Math.sqrt(value))) return Math.sqrt(value);

    return Math.pow(value, 2);
  });
};

export default toSquareOrRoot;
