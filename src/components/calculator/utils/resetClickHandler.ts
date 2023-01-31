import { Calc } from "src/types/stateType";
import { Dispatch, SetStateAction } from "react";

const resetClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>
) => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    res: 0,
  });
};

export default resetClickHandler;
