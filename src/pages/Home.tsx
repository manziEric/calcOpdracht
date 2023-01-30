import Button from "src/components/button";
import ButtonContainer from "src/components/buttonContainer";
import Display from "src/components/display";
import useCalcValue from "src/utils/useCalcValue";
import Layout from "src/components/layout";
import { btnValues } from "src/constants/calculatorNumber";
import buttonsClickHandler from "src/utils/buttonsClickHandler";

const Home = (): JSX.Element => {
  const calc = useCalcValue();
  const data = sessionStorage.getItem("calcHistory");

  return (
    <div>
      <Layout>
        <Display value={calc} history={data} />
        <ButtonContainer>
          {btnValues.flat().map((btn, i) => (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => buttonsClickHandler(calc, btn)}
            />
          ))}
        </ButtonContainer>
      </Layout>
    </div>
  );
};

export default Home;
