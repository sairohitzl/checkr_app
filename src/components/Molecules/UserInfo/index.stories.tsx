import UserInfo from ".";

import {ComponentStory,ComponentMeta} from '@storybook/react'

export default{
    title: "Molecules/UserInfo",
    component: UserInfo
} as ComponentMeta<typeof UserInfo>

const Template: ComponentStory<typeof UserInfo> = (args) => (
    <UserInfo {...args} />
  );

export const userInfo1 = Template.bind({}) 
userInfo1.args = {
    title: "Name",
    name: "James Smith",
    icon: "user"
}