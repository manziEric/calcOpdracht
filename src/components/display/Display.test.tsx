import { SetStateAction } from "react";
import { render, screen } from "@testing-library/react";
import Display from "src/components/display/Display";

describe("Display", () => {
  it("should render the component", () => {
    render(
      <Display
        value={{
          calc: {
            sign: "",
            num: 0,
            res: 0,
          },
          setCalc: function (
            value: SetStateAction<{ sign: string; num: number; res: number }>
          ): void {
            throw new Error("Function not implemented.");
          },
        }}
        history={'{"firstNum":2, "secondNum":42, "sign":"+"}'}
      ></Display>
    );
    expect(screen.getByTestId("calculator-display")).toBeInTheDocument();
  });
});
