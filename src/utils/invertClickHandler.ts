const invertClickHandler = (calc: any, setCalc: any) => {
  setCalc({
    ...calc,
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: "",
  });
};

export default invertClickHandler;
