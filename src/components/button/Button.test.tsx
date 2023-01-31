/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render the correct value", () => {
    const { getByText } = render(
      <Button value="click me" className="button" onClick={() => {}} />
    );

    expect(getByText("click me")).toBeInTheDocument();
  });

  it("should call the click handler", () => {
    const mockHandler = jest.fn();
    const { getByText } = render(
      <Button value="click me" className="button" onClick={mockHandler} />
    );

    fireEvent.click(getByText("click me"));

    expect(mockHandler).toHaveBeenCalled();
  });
});
