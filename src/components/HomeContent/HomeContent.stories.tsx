import { HomeContent, HomeContentProps } from "./HomeContent";
import { Story, Meta } from "@storybook/react";

export default {
    title: "HomeContent",
    component: HomeContent
} as Meta;

const Template: Story<HomeContentProps> = (args) => <HomeContent {...args} />

export const Default = Template.bind({});
Default.args = {
    locale: 0
}