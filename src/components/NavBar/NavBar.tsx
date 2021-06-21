import { Card } from "../Card/Card";
import { NavBarLink } from "../NavBarLink/NavBarLink";
import "./navbar.scss";

export const NAVBAR_CLASSNAME = "navbar";

export interface Link {
    text: string,
    href: string,
    active?: boolean
};

export type NavBarProps = {
    links: Link[]
};

export const NavBar = (props: NavBarProps) =>
    <Card className={NAVBAR_CLASSNAME}>
        <nav>
            {props.links.map((link) => <NavBarLink key={"navlink-" + link.text + link.href} href={link.href} active={link.active !== undefined ? link.active : false}>{link.text}</NavBarLink>)}
        </nav>
    </Card>;