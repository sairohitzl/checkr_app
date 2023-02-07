import {ComponentStory,ComponentMeta} from '@storybook/react'

import IconText from '.'

export default{
    title: "Molecules/IconText",
    component: IconText
} as ComponentMeta<typeof IconText>

const Template : ComponentStory<typeof IconText> = (args) => ( <IconText {...args} />)
export const icontext1 = Template.bind({})
icontext1.args = {
    icon:"dashboard",
    title: "Candidates",
}