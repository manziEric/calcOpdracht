import { StateProp } from "@components/types/stateType";
import "src/components/display/Display.scss";

interface ComponentsProps {
  value: StateProp;
  history: any;
}

const Display = ({
  value: { calc },
  history,
}: ComponentsProps): JSX.Element => {
  const historyData = JSON.parse(history);
  return (
    <div className="calculator-display">
      <div className="calculator-results">
        {calc.num ? calc?.num : calc?.res + ` ${calc.sign}`}
      </div>
      {historyData && (
        <div className="calculator-history">
          {`${historyData?.firstNum} ${historyData?.sign} ${historyData?.secondNum} = ${historyData?.result}`}
        </div>
      )}
    </div>
  );
};

export default Display;
