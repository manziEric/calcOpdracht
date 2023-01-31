import buttonsClickHandler from "src/components/calculator/utils/buttonsClickHandler";
import useCalcValue from "src/components/calculator/utils/useCalcValue";
import { Display, ButtonContainer, Button } from "src/components";
import { btnValues } from "src/constants/calculatorNumber";
import "src/components/calculator/Calculator.scss";

const Calculator = (): JSX.Element => {
  const calc = useCalcValue();
  const data = sessionStorage.getItem("calcHistory");

  return (
    <div className="calculator" data-testid="calculator">
      <Display value={calc} history={data} />
      <ButtonContainer>
        {btnValues.map((btn, i) => (
          <Button
            key={i}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={() => buttonsClickHandler(calc, btn)}
          />
        ))}
      </ButtonContainer>
    </div>
  );
};

export default Calculator;
