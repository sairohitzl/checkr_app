import CustomTag from ".";
import {ComponentMeta,ComponentStory} from '@storybook/react'

export default{
    title: "Molecules/CustomTag",
    component: CustomTag
} as ComponentMeta<typeof CustomTag>

const Template: ComponentStory<typeof CustomTag> = (args) => (<CustomTag {...args}/>)

export const chip1 = Template.bind({})
chip1.args = {
    type: 'green',
    title: "CLEAR"
}
export const chip2 = Template.bind({})
chip2.args = {
    type: 'yellow',
    title: "CONSIDER"
}
export const chip3 = Template.bind({})
chip3.args = {
    type: 'blue',
    title: "SCHEDULED"
}