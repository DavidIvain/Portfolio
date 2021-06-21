import { NavBarLink, NavBarLinkProps } from "./NavBarLink";
import { Story, Meta } from "@storybook/react";

export default {
    title: "NavBarLink",
    component: NavBarLink
} as Meta;

const Template: Story<NavBarLinkProps> = (args) => <NavBarLink {...args}>Link</NavBarLink>

export const Inactive = Template.bind({});
export const Active = Template.bind({});
Active.args = {
    href: "#",
    active: true
};