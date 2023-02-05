import { Dispatch, SetStateAction } from "react";
import { percentParseHandler } from "src/components/calculator/utils/percentParseHandler";
import { Calc } from "src/types/stateTypes";

const percentClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  let [calcNum, calcRes] = percentParseHandler({ calc });

  setCalc({
    ...calc,
    num: (calcNum /= Math.pow(100, 1)).toString(),
    res: (calcRes /= Math.pow(100, 1)),
    sign: "",
  });
};

export default percentClickHandler;
