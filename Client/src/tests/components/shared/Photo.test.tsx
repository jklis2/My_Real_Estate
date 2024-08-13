import Photo from '../../../components/shared/Photo';
import { render } from "@testing-library/react";

describe("Photo Component", () => {
    it("renders with provided className", () => {
        const {container} = render(<Photo className="custom-class" path="https://via.placeholder.com/150" alt="placeholder"/>);
        expect(container.firstChild).toHaveClass("custom-class");
    });
})
