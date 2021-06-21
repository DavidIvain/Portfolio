import { Avatar, AvatarProps } from "./Avatar";
import { Story, Meta } from "@storybook/react";

export default {
    title: "Avatar",
    component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
    alt: "default",
    src: "https://resize.programme-television.ladmedia.fr/rcrop/1200,/img/var/premiere/storage/images/tele-7-jours/news-tv/un-apres-midi-100-shrek-sur-france-2-4393382/89186312-1-fre-FR/Un-apres-midi-100-Shrek-sur-France-2.png",
    size: 128,
}
export const Large = Template.bind({});
Large.args = {
    alt: "default",
    src: "https://resize.programme-television.ladmedia.fr/rcrop/1200,/img/var/premiere/storage/images/tele-7-jours/news-tv/un-apres-midi-100-shrek-sur-france-2-4393382/89186312-1-fre-FR/Un-apres-midi-100-Shrek-sur-France-2.png",
    size: 256,
}