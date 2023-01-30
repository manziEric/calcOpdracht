import { Dispatch, SetStateAction } from "react";

const commaClickHandler = (
  btn: number | string,
  calc: object | any,
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>
) => {
  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + btn : calc.num,
  });
};

export default commaClickHandler;
