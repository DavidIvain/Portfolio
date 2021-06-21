import { Card, CARD_CLASSNAME, CARD_ELEVATED_CLASSNAME, CARD_LAID_CLASSNAME } from "./Card";
import { render, screen } from "@testing-library/react";

test("ClassName is good", () => {
    const { container } = render(<Card></Card>);
    expect(container.querySelector('.' + CARD_CLASSNAME)).toBeInTheDocument();
});

test("Is elevated", () => {
    const { container } = render(<Card elevated={true}></Card>);
    expect(container.querySelector('.' + CARD_ELEVATED_CLASSNAME)).toBeInTheDocument();
    expect(container.querySelector('.' + CARD_LAID_CLASSNAME)).not.toBeInTheDocument();
});

test("Is laid", () => {
    const { container } = render(<Card elevated={false}></Card>);
    expect(container.querySelector('.' + CARD_ELEVATED_CLASSNAME)).not.toBeInTheDocument();
    expect(container.querySelector('.' + CARD_LAID_CLASSNAME)).toBeInTheDocument();
});

test("Content is displayed", () => {
    render(<Card elevated={true}>OK</Card>);
    expect(screen.getByText(/OK/i)).toBeInTheDocument();
});