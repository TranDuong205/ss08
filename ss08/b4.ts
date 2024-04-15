function squareNumber(input: number | number[]): number | number[] {
    if (typeof input === "number") {
      return input * input;
    }
  
    return input.map((num) => num * num);
}