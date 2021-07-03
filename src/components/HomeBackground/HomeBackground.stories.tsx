import { HomeBackground } from "./HomeBackground";
import { Story, Meta } from "@storybook/react";

export default {
    title: "HomeBackground",
    component: HomeBackground,
} as Meta;

const Template: Story<{}> = () => <HomeBackground></HomeBackground>

export const Default = Template.bind({});
Default.args = {}