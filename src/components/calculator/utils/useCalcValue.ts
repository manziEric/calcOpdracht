import { useState } from "react";

const useCalcValue = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  return { calc, setCalc };
};

export default useCalcValue;
