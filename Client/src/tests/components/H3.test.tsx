import H3 from "../../components/H3";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";

describe("H3 Component", () => {
  const defaultClasses = "text-xl md:text-2xl font-bold text-neutral-700";
  it("renders children correctly", () => {
    const { getByText } = render(<H3>Hello World</H3>);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders with provided className", () => {
    const { container } = render(<H3 className="custom-class">Hello World</H3>);
    expect(container.firstChild).toHaveClass(`custom-class ${defaultClasses}`);
  });

  it("renders without any className if none provided", () => {
    const { container } = render(<H3>Hello World</H3>);
    expect(container.firstChild).toHaveClass(defaultClasses);
  });
});
