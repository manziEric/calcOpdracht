import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateTypes";

const commaClickHandler = (
  btn: number | string,
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num } = calc;
  setCalc({
    ...calc,
    num: !num.includes(".") ? num + btn : num,
  });
};

export default commaClickHandler;
