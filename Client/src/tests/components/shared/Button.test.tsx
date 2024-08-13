import { render, screen } from "@testing-library/react";
import Button from "../../../components/shared/Button.tsx";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders with default variant and without additional className", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-slate-300");
    expect(button).not.toHaveClass("bg-white");
  });

  it("renders with dark variant and applies additional className", () => {
    render(
        <Button variant="dark" className="custom-class">
          Click me
        </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("custom-class");
    expect(button).not.toHaveClass("bg-slate-300");
  });
});