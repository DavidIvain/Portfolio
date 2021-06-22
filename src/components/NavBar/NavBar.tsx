import { Card } from "../Card/Card";
import { NavBarLink } from "../NavBarLink/NavBarLink";
import "./navbar.scss";

export const NAVBAR_CLASSNAME = "navbar";

export interface Link {
    text: string,
    href: string,
};

export type NavBarProps = {
    links: Link[]
    active?: string | number
};

export const NavBar = (props: NavBarProps) =>
    <Card className={NAVBAR_CLASSNAME}>
        <nav>
            {props.links.map((link, index) => <NavBarLink key={"navlink-" + link.text + link.href} href={link.href} active={link.text === props.active || index === props.active ? true : false}>{link.text}</NavBarLink>)}
        </nav>
    </Card>;