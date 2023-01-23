import MyIcon from ".";


import { ComponentStory, ComponentMeta } from "@storybook/react";



export default {
  title: "Atoms/MyIcon",
  component: MyIcon,
}  as ComponentMeta<typeof MyIcon  >;

const Template: ComponentStory<typeof MyIcon> = (args) => <MyIcon {...args} />;

export const DashBoardIcon = Template.bind({})
DashBoardIcon.args = {icon: 'dashboard',colour:'primary'}

export const candidatesIcon = Template.bind({})
candidatesIcon.args = 
{
 icon: 'candidates',
 colour: 'primary'
}

export const hammer1Icon = Template.bind({})
hammer1Icon.args = {icon: 'hammer1',colour: 'primary'}

export const analyticsIcon = Template.bind({})
analyticsIcon.args = {icon: 'analytics',colour:'primary'}

export const accountIcon = Template.bind({})
accountIcon.args = {icon: 'account',colour:'primary'}

export const screeningIcon = Template.bind({})
screeningIcon.args = {icon: 'screening',colour:'primary'}

export const downArrowIcon = Template.bind({})
downArrowIcon.args = {icon: 'downArrow',colour:'primary'}

export const backArrowIcon = Template.bind({})
backArrowIcon.args = {icon: 'backArrow',colour:'primary'}

export const searchIcon = Template.bind({})
searchIcon.args = {icon: 'search',colour:'primary'}

export const filterIcon = Template.bind({})
filterIcon.args = {icon: 'filter',colour:'primary'}

export const moreIcon = Template.bind({})
moreIcon.args = {icon: 'more',colour:'primary'}

export const addIcon = Template.bind({})
addIcon.args = {icon: 'add',colour:'primary'}

export const exportIcon = Template.bind({})
exportIcon.args = {icon: 'export',colour:'primary'}

export const closeIcon = Template.bind({})
closeIcon.args = {icon: 'close',colour:'primary'}

export const copyIcon = Template.bind({})
copyIcon.args = {icon: 'copy',colour:'primary'}

export const attachmentIcon = Template.bind({})
attachmentIcon.args = {icon: 'attachment',colour:'primary'}

export const securityIcon = Template.bind({})
securityIcon.args = {icon: 'security',colour:'primary'}

export const phoneIcon = Template.bind({})
phoneIcon.args = {icon: 'phone',colour:'primary'}

export const locationIcon = Template.bind({})
locationIcon.args = {icon: 'location',colour:'primary'}

export const calendarIcon = Template.bind({})
calendarIcon.args = {icon: 'calendar',colour:'primary'}

export const clearIcon = Template.bind({})
clearIcon.args = {icon: 'clear',colour:'primary'}

export const nameIcon = Template.bind({})
nameIcon.args = {icon: 'name',colour:'primary'}

export const unhideIcon = Template.bind({})
unhideIcon.args = {icon: 'unhide',colour:'primary'}

export const hideIcon = Template.bind({})
hideIcon.args = {icon: 'hide',colour:'primary'}

export const packageIcon = Template.bind({})
packageIcon.args = {icon: 'package',colour:'primary'}

export const uparrowIcon = Template.bind({})
uparrowIcon.args = {icon: 'uparrow',colour:'primary'}

export const clockIcon = Template.bind({})
clockIcon.args = {icon: 'clock',colour:'primary'}

export const userIcon = Template.bind({})
userIcon.args = {icon: 'user',colour:'primary'}

export const emailIcon = Template.bind({})
emailIcon.args = {icon: 'email',colour:'primary'}

export const calendar2Icon = Template.bind({})
calendar2Icon.args = {icon: 'calendar2',colour:'primary'}

export const logoutIcon = Template.bind({})
logoutIcon.args = {icon: 'logout',colour:'primary'}

export const hammer2Icon = Template.bind({})
hammer2Icon.args = {icon: 'hammer2',colour:'secondary'}



