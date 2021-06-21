import { CardTitle, CardTitleProps } from "./CardTitle";
import { Story, Meta } from "@storybook/react";

export default {
    title: "CardTitle",
    component: CardTitle
} as Meta;

const Template: Story<CardTitleProps> = (args) => <CardTitle {...args}></CardTitle>

export const TextAlone = Template.bind({});
TextAlone.args = {
    backgroundColor: "dimgrey",
    color: "white",
    children:
        <>
            <h1>Title Alone</h1>
        </>
}
export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
    backgroundColor: "dimgrey",
    color: "white",
    children:
        <>
            <svg id="user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <h1>Title With Icon</h1>
        </>
}