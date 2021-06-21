import { PropsWithChildren } from "react";
import "./card.scss";

export const CARD_CLASSNAME = "card";
export const CARD_ELEVATED_CLASSNAME = "card-elevated";
export const CARD_LAID_CLASSNAME = "card-laid";

export type CardProps = PropsWithChildren<{
    elevated: boolean;
} & typeof defaultProps>;

const defaultProps = {
    elevated: true
};

export const Card = (props: CardProps) =>
    <div className={[CARD_CLASSNAME, (props.elevated ? CARD_ELEVATED_CLASSNAME : CARD_LAID_CLASSNAME)].join(" ")}>
        {props.children}
    </div>;
Card.defaultProps = defaultProps;