import { CardTitle, CARD_TITLE_CLASSNAME, CARD_TITLE_FLEX_CLASSNAME } from "./CardTitle";
import { render, screen } from "@testing-library/react";
import { CARD_ELEVATED_CLASSNAME, CARD_LAID_CLASSNAME } from "../Card/Card";

test("ClassName is good", () => {
    const { container } = render(<CardTitle></CardTitle>);
    expect(container.querySelector('.' + CARD_TITLE_CLASSNAME)).toBeInTheDocument();
});

test("Content is displayed", () => {
    render(<CardTitle elevated={true}>OK</CardTitle>);
    expect(screen.getByText(/OK/i)).toBeInTheDocument();
});

test("Is elevated", () => {
    const { container } = render(<CardTitle elevated={true}></CardTitle>);
    expect(container.querySelector('.' + CARD_ELEVATED_CLASSNAME)).toBeInTheDocument();
    expect(container.querySelector('.' + CARD_LAID_CLASSNAME)).not.toBeInTheDocument();
});

test("Is laid", () => {
    const { container } = render(<CardTitle elevated={false}></CardTitle>);
    expect(container.querySelector('.' + CARD_ELEVATED_CLASSNAME)).not.toBeInTheDocument();
    expect(container.querySelector('.' + CARD_LAID_CLASSNAME)).toBeInTheDocument();
});