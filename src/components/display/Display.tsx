import { StateProp } from "src/types/stateType";
import "src/components/display/Display.scss";

interface ComponentsProps {
  value: StateProp;
  history: string | null;
}

const Display = ({
  value: { calc },
  history,
}: ComponentsProps): JSX.Element => {
  let historyData;
  if (history !== null) {
    historyData = JSON.parse(history);
  }
  const {
    firstNum,
    sign: calcSign,
    secondNum,
    result,
  } = historyData ?? { firstNum: "", sign: "", secondNum: "", result: "" };
  const { num, sign, res } = calc;
  return (
    <div className="calculator-display" data-testid="calculator-display">
      <div className="calculator-results">{num ? num : res + ` ${sign}`}</div>
      {historyData && (
        <div className="calculator-history">
          {`${firstNum} ${calcSign} ${secondNum} = ${result}`}
        </div>
      )}
    </div>
  );
};

export default Display;
