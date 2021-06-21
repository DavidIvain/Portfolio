import { Card, CardProps } from "./Card";
import { Story, Meta } from "@storybook/react";

export default {
    title: "Card",
    component: Card
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}></Card>

export const Elevated = Template.bind({});
Elevated.args = {
    elevated: true,
    children:
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero imperdiet, malesuada sem vitae, venenatis nunc. Nulla vehicula posuere interdum. Donec commodo est nibh, eget lobortis dui molestie vel. Vivamus euismod nisl eu molestie tincidunt. Aliquam feugiat, dui quis dapibus egestas, orci risus vulputate diam, laoreet pellentesque nisi lacus at libero. Aliquam luctus vestibulum nibh id fringilla. Phasellus neque quam, aliquet eu efficitur nec, ornare ac neque. Ut ut metus aliquam, congue nisl nec, bibendum nisl. Nam porttitor sollicitudin nunc. Cras tincidunt tellus quis pretium lacinia. Nunc rutrum metus nec varius placerat. Proin nec mauris ac eros varius maximus. Quisque sollicitudin tempus purus nec vulputate. Aliquam vehicula magna id ligula varius interdum. Quisque ut posuere mi.
            </p>
            <p>
                Nullam nec nibh eu purus ultrices efficitur vitae et ligula. Etiam a felis posuere, aliquet nunc eget, lacinia dolor. Aliquam feugiat est felis, non egestas massa rhoncus in. Donec auctor mauris sit amet ornare malesuada. Nam libero turpis, egestas nec malesuada non, egestas at magna. Integer ultrices blandit libero at iaculis. Proin condimentum ipsum sit amet metus elementum, et condimentum est posuere. Pellentesque pellentesque tellus at purus hendrerit dapibus. Duis in leo magna. Sed eu urna consequat, mollis turpis a, pulvinar lectus. Curabitur at tempor lacus. Vivamus id mattis nulla. Aenean molestie diam mi, non ultrices lorem pharetra sed. In sed tellus eget dolor mollis tristique quis et arcu. Ut ut sapien et metus vestibulum blandit. Duis leo odio, ultricies vitae bibendum et, venenatis ut dui.
            </p>
        </>
}