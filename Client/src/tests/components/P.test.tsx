import P from "../../components/P";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";

describe("P Component", () => {
  const defaultClasses = "text-sm md:text-base text-neutral-700";
  it("renders children correctly", () => {
    const { getByText } = render(<P>Hello World</P>);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders with provided className", () => {
    const { container } = render(<P className="custom-class">Hello World</P>);
    expect(container.firstChild).toHaveClass(`custom-class ${defaultClasses}`);
  });

  it("renders without any className if none provided", () => {
    const { container } = render(<P>Hello World</P>);
    expect(container.firstChild).toHaveClass(defaultClasses);
  });
});
