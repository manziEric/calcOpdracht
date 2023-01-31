import { Calc } from "@components/types/stateType";
import { Dispatch, SetStateAction } from "react";

const signClickHandler = (
  btn: string,
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>
) => {
  setCalc({
    ...calc,
    sign: btn,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0,
  });
};

export default signClickHandler;
