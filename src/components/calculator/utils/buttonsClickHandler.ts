import { Dispatch, SetStateAction } from "react";
import { Calc } from "src/types/stateType";
import commaClickHandler from "src/components/calculator/utils/commaClickHandler";
import equalsClickHandler from "src/components/calculator/utils/equalsClickHandler";
import invertClickHandler from "src/components/calculator/utils/invertClickHandler";
import numClickHandler from "src/components/calculator/utils/numClickHandler";
import percentClickHandler from "src/components/calculator/utils/percentClickHandler";
import resetClickHandler from "src/components/calculator/utils/resetClickHandler";
import signClickHandler from "src/components/calculator/utils/signClickHandler";

const buttonsClickHandler = (
  calcValue: {
    calc: Calc;
    setCalc: Dispatch<
      SetStateAction<{ sign: string; num: number; res: number }>
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
    : btn === "/" || btn === "X" || btn === "-" || btn === "+" || btn === ")"
    ? signClickHandler(btn, calc, setCalc)
    : btn === "."
    ? commaClickHandler(btn, calc, setCalc)
    : numClickHandler(btn, calc, setCalc);
};

export default buttonsClickHandler;
