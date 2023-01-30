import "src/components/display/Display.scss";

const Display = ({ value: { calc }, history }: any): JSX.Element => {
  const historyData = JSON.parse(history);
  console.log(historyData);
  return (
    <div className="calculator-display">
      <div className="calculator-results">
        {calc.num ? calc.num : calc.res + ` ${calc.sign}`}
      </div>
      {historyData == null ? (
        ""
      ) : (
        <div className="calculator-history">
          {`${historyData?.firstNum} ${historyData?.sign} ${historyData?.secondNum} = ${historyData?.result}`}
        </div>
      )}
    </div>
  );
};

export default Display;
