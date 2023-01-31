import { render, screen } from "@testing-library/react";
import Calculator from "src/components/calculator/Calculator";

describe("Calculator", () => {
  it("should render the component", () => {
    render(<Calculator></Calculator>);
    expect(screen.getByTestId("calculator")).toBeInTheDocument();
  });
});
