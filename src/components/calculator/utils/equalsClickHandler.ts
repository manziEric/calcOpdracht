import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateType";

const equalsClickHandler = (
  calc: Calc,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>
) => {
  const { num, sign, res } = calc;
  if (sign && num) {
    const math = (a: number, b: number, sign: string) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b;
    const calcResult = math(Number(res), Number(num), sign);
    sessionStorage.setItem(
      "calcHistory",
      JSON.stringify({
        firstNum: res,
        sign: sign,
        secondNum: num,
        result: calcResult,
      })
    );
    setCalc({
      ...calc,
      res: +num === 0 && sign === "/" ? 0 : calcResult,
      sign: "",
      num: "",
    });
  }
};

export default equalsClickHandler;
