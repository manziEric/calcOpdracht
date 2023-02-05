import { render, screen } from "@testing-library/react";
import { Display } from "src/components";

describe("Display", () => {
  it("should render the component", () => {
    render(
      <Display
        value={{
          calc: {
            sign: "",
            num: "",
            res: 0,
          },
          setCalc: () => {},
        }}
        history={'{"firstNum":2, "secondNum":42, "sign":"+"}'}
      ></Display>
    );
    expect(screen.getByTestId("display")).toBeInTheDocument();
  });
});
