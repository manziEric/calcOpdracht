import useDisplay from "src/components/display/useDisplay";
import { StateProp } from "src/types/stateTypes";
import "src/components/display/Display.scss";

interface ComponentsProps {
  value: StateProp;
  history: string | null;
}

const Display = ({ value, history }: ComponentsProps): JSX.Element => {
  const [firstNum, calcSign, secondNum, result, num, sign, res, historyData] =
    useDisplay({ value, history });

  return (
    <div className="display" data-testid="display">
      <div className="display-results">{num ? num : res + ` ${sign}`}</div>
      {historyData && (
        <div className="display-history">
          {`${firstNum} ${calcSign} ${secondNum} = ${result}`}
        </div>
      )}
    </div>
  );
};

export default Display;
