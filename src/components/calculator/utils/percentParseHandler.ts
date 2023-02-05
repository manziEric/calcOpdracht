import { Calc } from "src/types/stateTypes";

interface ComponentProps {
  calc: Calc;
}

export const percentParseHandler = ({ calc }: ComponentProps) => {
  const { num, res } = calc;
  console.log(num);
  console.log(res);
  let calcNum = num ? parseFloat(num) : 0;
  let calcRes = res ? res : 0;
  return [calcNum, calcRes];
};
