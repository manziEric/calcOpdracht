interface ComponentsProps {
  num: string;
  sign: string;
  res: number;
}

export const numberCalcHandler = ({ num, sign, res }: ComponentsProps) => {
  const math = (a: number, b: number, sign: string) =>
    sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

  const calcResult = math(Number(res), Number(num), sign);
  return [calcResult];
};
