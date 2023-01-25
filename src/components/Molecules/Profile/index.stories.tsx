import ProfileTab from ".";
import { ComponentStory,ComponentMeta } from "@storybook/react";

export default {
    title: "Molecules/Profile",
    component: ProfileTab
} as ComponentMeta<typeof ProfileTab>

const Template: ComponentStory<typeof ProfileTab> = (args) => (
    <ProfileTab {...args} />
  );

export const profile1 = Template.bind({})
profile1.args = {
    name : 'James Rodriguez',
    email : 'James.Co'
}