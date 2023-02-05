interface ComponentsProps {
  num: string;
  sign: string;
  res: number;
  calcResult: number;
}

export const setSessionHandler = ({
  num,
  sign,
  res,
  calcResult,
}: ComponentsProps) => {
  sessionStorage.setItem(
    "calcHistory",
    JSON.stringify({
      firstNum: res,
      sign: sign,
      secondNum: num,
      result: calcResult,
    })
  );
};
