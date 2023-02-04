import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateType";

const numClickHandler = (
  btn: number | string,
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num, sign, res } = calc;
  setCalc({
    ...calc,
    num: num.includes(".")
      ? num + btn.toString()
      : +num % 1 === 0
      ? num + btn.toString()
      : num,
    res: !sign ? 0 : res,
  });
};

export default numClickHandler;
