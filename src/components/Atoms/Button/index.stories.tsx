import ButtonElement from ".";

import { ComponentStory,ComponentMeta } from "@storybook/react";

export default{
    title: "Atoms/Button",
    component: ButtonElement,
    parameters: {
        actions: {
          handles: ["click"],
        },
      },
} as ComponentMeta<typeof ButtonElement>

const Template: ComponentStory<typeof ButtonElement> = (args) => <ButtonElement {...args} />;

export const primaryButton = Template.bind({})
primaryButton.args = {
    label: 'Button1',
    variant: 'primary'
}

export const secondaryButton = Template.bind({})
secondaryButton.args = {
    label: 'Button2',
    variant: 'secondary'
}

export const hoverButton = Template.bind({})
hoverButton.args = {
    label: 'Button3',
    variant: 'hover'
}
