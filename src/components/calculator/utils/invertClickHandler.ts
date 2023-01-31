import { Calc } from "@components/types/stateType";
import { Dispatch, SetStateAction } from "react";

const invertClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>
) => {
  setCalc({
    ...calc,
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: "",
  });
};

export default invertClickHandler;
