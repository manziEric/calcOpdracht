import { StateProp } from "src/types/stateTypes";

interface ComponentsProps {
  value: StateProp;
  history: string | null;
}

const useDisplay = ({ value: { calc }, history }: ComponentsProps) => {
  let historyData;

  if (history !== null) {
    historyData = JSON.parse(history);
  }

  const {
    firstNum,
    sign: calcSign,
    secondNum,
    result,
  } = historyData ?? { firstNum: "", sign: "", secondNum: "", result: "" };
  const { num, sign, res } = calc;

  return [firstNum, calcSign, secondNum, result, num, sign, res, historyData];
};

export default useDisplay;
