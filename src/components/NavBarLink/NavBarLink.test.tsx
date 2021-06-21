import { NavBarLink, NAVBAR_LINK_CLASSNAME, ACTIVE_CLASSNAME } from "./NavBarLink";
import { render, screen } from "@testing-library/react";

test("ClassName is good", () => {
    const { container } = render(<NavBarLink href="#"></NavBarLink>);
    expect(container.querySelector('.' + NAVBAR_LINK_CLASSNAME)).toBeInTheDocument();
});

test("Is active", () => {
    const { container } = render(<NavBarLink href="#" active></NavBarLink>);
    expect(container.querySelector('.' + ACTIVE_CLASSNAME)).toBeInTheDocument();
});

test("Is inactive", () => {
    const { container } = render(<NavBarLink href="#" active={false}></NavBarLink>);
    expect(container.querySelector('.' + ACTIVE_CLASSNAME)).not.toBeInTheDocument();
});

test("Content is displayed", () => {
    render(<NavBarLink href="#">OK</NavBarLink>);
    expect(screen.getByText(/OK/i)).toBeInTheDocument();
});