import "src/components/display/Display.scss";

const Display = ({ value: { calc } }: any): JSX.Element => {
  return (
    <div className="calculator-display">
      <div className="calculator-results">
        {calc.num ? calc.num : calc.res + ` ${calc.sign}`}
      </div>
    </div>
  );
};

export default Display;
