import { Dispatch, SetStateAction } from "react";
import { numberCalcHandler } from "src/components/calculator/utils/numberCalcHandler";
import { setSessionHandler } from "src/components/calculator/utils/setSessionHandler";
import { Calc } from "src/types/stateTypes";

const equalsClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num, sign, res } = calc;

  if (sign && num) {
    const [calcResult] = numberCalcHandler({ num, sign, res });

    setSessionHandler({ num, sign, res, calcResult });
    setCalc({
      ...calc,
      res: +num === 0 && sign === "/" ? 0 : calcResult,
      sign: "",
      num: "",
    });
  }
};

export default equalsClickHandler;
