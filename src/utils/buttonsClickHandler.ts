import { Dispatch, SetStateAction } from "react";
import commaClickHandler from "./commaClickHandler";
import equalsClickHandler from "./equalsClickHandler";
import invertClickHandler from "./invertClickHandler";
import numClickHandler from "./numClickHandler";
import percentClickHandler from "./percentClickHandler";
import resetClickHandler from "./resetClickHandler";
import signClickHandler from "./signClickHandler";

const useButtonsClickHandler = (
  calcValue: {
    calc: object;
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

export default useButtonsClickHandler;
