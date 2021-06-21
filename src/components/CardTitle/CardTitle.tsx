import { CSSProperties, PropsWithChildren } from "react";
import { CARD_LAID_CLASSNAME, CARD_ELEVATED_CLASSNAME } from "../Card/Card";
import "./card-title.scss";

export const CARD_TITLE_CLASSNAME = "card-title";
export const CARD_TITLE_FLEX_CLASSNAME = "card-title-flex";

export type CardTitleProps = PropsWithChildren<{
    backgroundColor?: string;
    background?: string;
    color?: string;
    justifyContent?: "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "center";
    flex: boolean;
    elevated: boolean;
} & typeof defaultProps>;

const defaultProps = {
    flex: true,
    elevated: false
};

export const CardTitle = (props: CardTitleProps) => {
    let classNames = [CARD_TITLE_CLASSNAME];
    let styles: CSSProperties = {};
    if (props.flex) classNames.push(CARD_TITLE_FLEX_CLASSNAME);
    classNames.push(props.elevated ? CARD_ELEVATED_CLASSNAME : CARD_LAID_CLASSNAME);
    if (props.backgroundColor !== undefined) styles.backgroundColor = props.backgroundColor;
    if (props.background !== undefined) styles.background = props.background;
    if (props.color !== undefined) styles.color = props.color;
    if (props.justifyContent !== undefined) styles.justifyContent = props.justifyContent;
    return <div style={styles} className={classNames.join(" ")}>{props.children}</div>;
};
CardTitle.defaultProps = defaultProps;