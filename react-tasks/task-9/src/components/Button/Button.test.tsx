import Button from "./Button";
import { vi, describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

describe("Button tests", () => {
  it("Renders button correctly and handles click events", () => {
    const mockOnClick = vi.fn();
    const { getByText } = render(
      <Button text='Test button' color='green' onClick={mockOnClick} />
    );
    const buttonElement = getByText(/Test button/i);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
