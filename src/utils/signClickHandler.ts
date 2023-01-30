const signClickHandler = (btn: any, calc: any, setCalc: any) => {
  setCalc({
    ...calc,
    sign: btn,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0,
  });
};

export default signClickHandler;
