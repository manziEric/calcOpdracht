import { Dispatch, SetStateAction } from "react";

const numClickHandler = (
  btn: number | string,
  calc: any,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>
) => {
  setCalc({
    ...calc,
    num:
      calc.num === 0 && btn === 0
        ? 0
        : calc.num.toString().includes(".")
        ? Number(calc.num.toString() + btn.toString())
        : calc.num % 1 === 0
        ? Number(calc.num.toString() + btn.toString())
        : calc.num + btn,
    res: !calc.sign ? 0 : calc.res,
  });
};

export default numClickHandler;
