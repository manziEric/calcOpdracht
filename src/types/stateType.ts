import { Dispatch, SetStateAction } from "react";

export type Calc = {
  sign: string;
  num: number;
  res: number;
};

export type StateProp = {
  calc: {
    sign: string;
    num: number;
    res: number;
  };
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>;
};
