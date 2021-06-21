import { NavBar, Link, NAVBAR_CLASSNAME } from "./NavBar";
import { render, screen } from "@testing-library/react";

test("ClassName is good", () => {
    const { container } = render(<NavBar links={[]}></NavBar>);
    expect(container.querySelector('.' + NAVBAR_CLASSNAME)).toBeInTheDocument();
});

test("Content is displayed", () => {
    const links: Link[] = [{ text: "OK", href: "#" }];
    render(<NavBar links={links} />);
    expect(screen.getByText(/OK/i)).toBeInTheDocument();
});