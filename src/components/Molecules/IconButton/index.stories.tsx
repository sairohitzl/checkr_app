import {ComponentStory,ComponentMeta} from '@storybook/react'
import IconButton from '.'
export default{
    title: "Molecules/IconButton",
    component: IconButton
} as ComponentMeta<typeof IconButton>

const Template : ComponentStory<typeof IconButton> = (args) => ( <IconButton {...args} />)



export const iconbutton1 = Template.bind({})
iconbutton1.args = {
    icon: "add",
    variant: "primary",
}
