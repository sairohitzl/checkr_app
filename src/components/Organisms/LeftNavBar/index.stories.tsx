import LeftNavBar from ".";
import { ComponentStory,ComponentMeta } from "@storybook/react";
import {IconTextData} from '../../../utils/constants'
export default {
    title: "Organisms/LeftNavBar",
    component: LeftNavBar
} as ComponentMeta<typeof LeftNavBar>;

const Template : ComponentStory<typeof LeftNavBar> = (args) => (
    <LeftNavBar {...args}/>
)

export const navbar = Template.bind({})
navbar.args = {
    data: IconTextData
}