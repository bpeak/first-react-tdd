import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  it("has input and button", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText("type your todo");
    getByText("submit");
  });

  it("changes input", () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText("type your todo");
    fireEvent.change(input, {
      target: {
        value: "learn tdd"
      }
    });
    expect(input).toHaveAttribute("value", "learn tdd");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoForm onInsert={onInsert} />
    );
    const input = getByPlaceholderText("type your todo");
    const button = getByText("submit");

    fireEvent.change(input, {
      target: {
        value: "learn tdd"
      }
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("learn tdd");
    expect(input).toHaveAttribute("value", "");
  });
});
