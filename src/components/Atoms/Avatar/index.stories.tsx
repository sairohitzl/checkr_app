import ProfileAvatar from ".";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Avatar",
  component: ProfileAvatar,
} as ComponentMeta<typeof ProfileAvatar>;

const Template: ComponentStory<typeof ProfileAvatar> = (args) => (
  <ProfileAvatar {...args} />
);

export const ProfilePic = Template.bind({});
