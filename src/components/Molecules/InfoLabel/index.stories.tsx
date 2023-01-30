import {ComponentStory,ComponentMeta} from '@storybook/react'
import InfoLabel from '.'
export default {
    title: "Molecules/InfoLabel",
    component: InfoLabel
} as ComponentMeta<typeof InfoLabel>

const Template: ComponentStory<typeof InfoLabel> = (args) => <InfoLabel {...args}/>
export const infolabel1 = Template.bind({})
infolabel1.args = {
    title: "Candidates Information",
    icon: "downArrow"
}
