import { Dispatch, SetStateAction } from "react";

export type Calc = {
  sign: string;
  num: string;
  res: number;
};

export type StateProp = {
  calc: {
    sign: string;
    num: string;
    res: number;
  };
  setCalc: Dispatch<SetStateAction<{ sign: string; num: string; res: number }>>;
};
