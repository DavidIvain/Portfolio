import { Meta, Story } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
    title: "Header",
    component: Header
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args}></Header>

export const Default = Template.bind({});
Default.args = {
    active: 0,
    links: [
        { text: "Home", href: "#" },
        { text: "Two", href: "#" },
        { text: "Three", href: "#" }
    ],
    //avatarLink: "https://resize.programme-television.ladmedia.fr/rcrop/1200,/img/var/premiere/storage/images/tele-7-jours/news-tv/un-apres-midi-100-shrek-sur-france-2-4393382/89186312-1-fre-FR/Un-apres-midi-100-Shrek-sur-France-2.png"
    avatarLink: "/assets/avatar.jpg"
}