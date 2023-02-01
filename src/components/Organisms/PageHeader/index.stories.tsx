import PageHeader from ".";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonElement from "../../Atoms/Button";
import IconTextButton from "../../Molecules/IconTextButton";

export default {
  title: "Organisms/PageHeader",
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);
// export const Basic = Template.bind({});
// Basic.args = { title: "Candidates" };
// export const WithLeading = Template.bind({});
// WithLeading.args = {
//   leading: true,
//   title: "Candidates",

// };
export const WithActions = Template.bind({});
WithActions.args = {
  title: "Candidates",
  actions: [
    <ButtonElement label="Pre adverse action" variant="secondary" />,
    <ButtonElement label="Engage" variant="primary" />,
  ],
};
export const WithLeadingAndActions = Template.bind({});
WithLeadingAndActions.args = {
  leading: true,
  title: "Candidates",
  actions: [
    <IconTextButton icon="export" label="Export" variant="secondary" />,
    <IconTextButton icon="add" label="Manual Order" variant="primary" />,
  ],
};
