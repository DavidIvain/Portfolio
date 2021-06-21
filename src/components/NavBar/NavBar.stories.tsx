import { NavBar, NavBarProps } from "./NavBar";
import { Story, Meta } from "@storybook/react";

export default {
    title: "NavBar",
    component: NavBar
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args}></NavBar>

export const Nav = Template.bind({});
Nav.args = {
    links: [
        { text: "Home", href: "#", active: true },
        { text: "Two", href: "#" },
        { text: "Three", href: "#" }
    ]
};