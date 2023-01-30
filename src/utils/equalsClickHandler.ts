const equalsClickHandler = (calc: any, setCalc: any) => {
    if (calc.sign && calc.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

     const calcResult = math(
      Number(calc.res),
      Number(calc.num),
      calc.sign
      ) 
      
      sessionStorage.setItem("calcHistory", JSON.stringify({
        firstNum: calc.res, 
        sign: calc.sign, 
        secondNum: calc.num, 
        result: calcResult
      }));

      setCalc({
        ...calc,
        res:
          calc.num === 0 && calc.sign === "/"
            ? "Can't divide with 0"
            : calcResult,
        sign: "",
        num: 0,
      });
    }
  };

  export default equalsClickHandler;