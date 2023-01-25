import CheckBox from ".";

import { ComponentStory, ComponentMeta } from "@storybook/react";



export default {
  title: "Atoms/CheckBox",
  component: CheckBox,
}  as ComponentMeta<typeof CheckBox >;

const Template: ComponentStory<typeof CheckBox> = (args) =>(<CheckBox {...args} />);

export const checkbox1 = Template.bind({})
checkbox1.args = {
  checked: true
};

export const checkbox2 = Template.bind({})
checkbox2.args = {
  checked: false
};