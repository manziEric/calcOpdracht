const resetClickHandler = (calc: any, setCalc: any) => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    res: 0,
  });
};

export default resetClickHandler;
