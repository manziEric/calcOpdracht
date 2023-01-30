const percentClickHandler = (calc: any, setCalc: any) => {
  let num = calc.num ? parseFloat(calc.num) : 0;
  let res = calc.res ? parseFloat(calc.res) : 0;

  setCalc({
    ...calc,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: "",
  });
};

export default percentClickHandler;
