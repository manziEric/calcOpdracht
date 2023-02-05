import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateTypes";

const signClickHandler = (
  btn: string,
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num, res } = calc;
  setCalc({
    ...calc,
    sign: btn,
    res: !res && +num ? +num : res,
    num: "",
  });
};

export default signClickHandler;
