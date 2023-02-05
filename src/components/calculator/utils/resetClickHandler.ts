import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateTypes";

const resetClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  setCalc({
    ...calc,
    sign: "",
    num: "",
    res: 0,
  });
};

export default resetClickHandler;
