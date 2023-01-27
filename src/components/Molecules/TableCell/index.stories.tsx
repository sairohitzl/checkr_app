import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomTableCell from ".";

export default {
  title: "Molecules/CustomTableCell",
  component: CustomTableCell,
} as ComponentMeta<typeof CustomTableCell>;

const Template: ComponentStory<typeof CustomTableCell> = (args) => (
  <CustomTableCell {...args} />
);

export const interactive = Template.bind({})
interactive.args = {
    text: "John Smith",
    variant: "interactivetext"
}

export const date = Template.bind({})
date.args = {
    text: "17/08/1999",
    variant: "date"
}

export const status = Template.bind({})
status.args = {
    text: "clear",
    variant: "status",
    statustype: 1,
}

export const normaltext = Template.bind({})
normaltext.args = {
    text: "Walsh",
    variant: "text",

}