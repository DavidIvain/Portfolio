import { PropsWithChildren } from "react";
import "./navbar-link.scss";

export const NAVBAR_LINK_CLASSNAME = "navbar-link";
export const ACTIVE_CLASSNAME = "active";

export type NavBarLinkProps = PropsWithChildren<{
    href: string,
    active: boolean
} & typeof defaultProps>;

const defaultProps = {
    active: false
};

export const NavBarLink = (props: NavBarLinkProps) => {
    let classNames = [NAVBAR_LINK_CLASSNAME];
    if (props.active) classNames.push(ACTIVE_CLASSNAME)
    return <a href={props.href} className={classNames.join(" ")}>{props.children}</a>;
}
NavBarLink.defaultProps = defaultProps;