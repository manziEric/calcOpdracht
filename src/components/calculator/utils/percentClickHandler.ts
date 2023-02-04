import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateType";

const percentClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num, res } = calc;
  let calcNum = num ? parseFloat(num) : 0;
  let calcRes = res ? parseFloat(res.toString()) : 0;
  setCalc({
    ...calc,
    num: (calcNum /= Math.pow(100, 1)).toString(),
    res: (calcRes /= Math.pow(100, 1)),
    sign: "",
  });
};

export default percentClickHandler;
