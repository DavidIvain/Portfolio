import { Avatar } from "../Avatar/Avatar";
import { Card } from "../Card/Card";
import { Link, NavBar } from "../NavBar/NavBar";
import "./header.scss";

export const HEADER_ID = "header";

export type HeaderProps = {
    avatarLink: string;
    links: Link[];
    active?: string | number;
};

export const Header = (props: HeaderProps) => {
    //function changeLocale() { }
    return <header id="header">
        <div>
            <Avatar src={props.avatarLink} alt="My Photo" size={160} />
            <Card>
                <h1 className="header-title">David IVAIN</h1>
            </Card>
        </div>
        <NavBar links={props.links} active={props.active} />
    </header>;
}