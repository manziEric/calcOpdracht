import { Calc } from "src/types/stateTypes";

interface ComponentProps {
  calc: Calc;
}

export const percentParseHandler = ({ calc }: ComponentProps) => {
  const { num, res } = calc;
  let calcNum = num ? parseFloat(num) : 0;
  let calcRes = res ? res : 0;
  return [calcNum, calcRes];
};
