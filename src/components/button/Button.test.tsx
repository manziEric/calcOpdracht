import { render, fireEvent, screen } from "@testing-library/react";
import Button from "src/components/button/Button";

describe("Button", () => {
  it("should render the correct value", () => {
    render(<Button value="click me" className="button" onClick={() => {}} />);

    expect(screen.getByText("click me")).toBeInTheDocument();
  });

  it("should call the click handler", () => {
    const mockHandler = jest.fn();
    render(
      <Button value="click me" className="button" onClick={mockHandler} />
    );

    fireEvent.click(screen.getByText("click me"));

    expect(mockHandler).toHaveBeenCalled();
  });
});
