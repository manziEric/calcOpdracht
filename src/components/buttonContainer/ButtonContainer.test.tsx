import { render, screen } from "@testing-library/react";
import ButtonContainer from "src/components/buttonContainer/ButtonContainer";
import Button from "src/components/button/Button";

describe("ButtonContainer", () => {
  it("should render the component", () => {
    render(
      <ButtonContainer
        children={
          <Button
            value={"click me"}
            className={"button"}
            onClick={() => null}
          />
        }
      />
    );
    expect(screen.getByText("click me")).toBeInTheDocument();
  });
});
