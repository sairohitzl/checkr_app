import CheckboxText from '.'
import {ComponentMeta,ComponentStory} from '@storybook/react'

export default{
    title: "Molecules/CheckboxText",
    component: CheckboxText
} as ComponentMeta<typeof CheckboxText>

const Template: ComponentStory<typeof CheckboxText> = (args) => (<CheckboxText {...args}/>)

export const unchecked = Template.bind({})
unchecked.args = {
    text : "Driving while license suspended",
    checked: false
}

export const checked = Template.bind({})
checked.args = {
    text : "Driving while license suspended",
    checked: true
}