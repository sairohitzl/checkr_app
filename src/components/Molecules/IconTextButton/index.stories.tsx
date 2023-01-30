import {ComponentStory,ComponentMeta} from '@storybook/react'

import IconTextButton from '.'

export default{
    title: "Molecules/IconTextButton",
    component: IconTextButton
} as ComponentMeta<typeof IconTextButton>

const Template : ComponentStory<typeof IconTextButton> = (args) => ( <IconTextButton {...args} />)
export const icontextbutton1 = Template.bind({})
icontextbutton1.args = {
    icon: "add",
    label: "Create Order",
    variant: "primary"

}