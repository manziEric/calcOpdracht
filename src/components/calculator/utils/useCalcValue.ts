import { useState } from "react";

const useCalcValue = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: "",
    res: 0,
  });
  return { calc, setCalc };
};

export default useCalcValue;
