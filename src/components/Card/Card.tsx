import { PropsWithChildren } from "react";
import "./card.scss";

export const CARD_CLASSNAME = "card";
export const CARD_ELEVATED_CLASSNAME = "card-elevated";
export const CARD_LAID_CLASSNAME = "card-laid";

export type CardProps = PropsWithChildren<{
    elevated: boolean;
    className?: string;
    id?: string;
} & typeof defaultProps>;

const defaultProps = {
    elevated: true
};

export const Card = (props: CardProps) => {
    let classNames = [CARD_CLASSNAME, (props.elevated ? CARD_ELEVATED_CLASSNAME : CARD_LAID_CLASSNAME)];
    if (props.className !== undefined) classNames.push(props.className);
    return <div className={classNames.join(" ")} id={props.id}>
        {props.children}
    </div>;
}
Card.defaultProps = defaultProps;