import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateTypes";
import {
  commaClickHandler,
  equalsClickHandler,
  invertClickHandler,
  numberClickHandler,
  percentClickHandler,
  resetClickHandler,
  signClickHandler,
} from "src/components/calculator/utils";

const buttonsClickHandler = (
  calcValue: {
    calc: Calc;
    setCalc: Dispatch<
      SetStateAction<{ sign: string; num: string; res: number }>
    >;
  },
  btn: number | string
) => {
  const { calc, setCalc } = calcValue;
  return btn === "C"
    ? resetClickHandler(calc, setCalc)
    : btn === "+-"
    ? invertClickHandler(calc, setCalc)
    : btn === "%"
    ? percentClickHandler(calc, setCalc)
    : btn === "="
    ? equalsClickHandler(calc, setCalc)
    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
    ? signClickHandler(btn, calc, setCalc)
    : btn === "."
    ? commaClickHandler(btn, calc, setCalc)
    : numberClickHandler(btn, calc, setCalc);
};

export default buttonsClickHandler;
