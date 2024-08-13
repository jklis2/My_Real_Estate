import H2 from "../../../components/shared/H2.tsx";
import { render } from "@testing-library/react";


describe("H2 Component", () => {
  const defaultClasses = "sm:text-4xl text-2xl font-bold text-neutral-700";
  it("renders children correctly", () => {
    const { getByText } = render(<H2>Hello World</H2>);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders with provided className", () => {
    const { container } = render(<H2 className="custom-class">Hello World</H2>);
    expect(container.firstChild).toHaveClass(`custom-class ${defaultClasses}`);
  });

  it("renders without any className if none provided", () => {
    const { container } = render(<H2>Hello World</H2>);
    expect(container.firstChild).toHaveClass(defaultClasses);
  });
});
