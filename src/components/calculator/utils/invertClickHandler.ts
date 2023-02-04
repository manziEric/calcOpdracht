import { Calc } from "src/types/stateType";
import { Dispatch, SetStateAction } from "react";

const invertClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num, res } = calc;
  setCalc({
    ...calc,
    num: num ? (+num * -1).toString() : "0",
    res: res ? res * -1 : 0,
    sign: "0",
  });
};

export default invertClickHandler;
