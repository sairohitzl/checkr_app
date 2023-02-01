import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CandidateTable from ".";


export default {
  title: "Organisms/CandidateTable",
  component: CandidateTable,
} as ComponentMeta<typeof CandidateTable>;
const Template: ComponentStory<typeof CandidateTable> = (args) => (
  <CandidateTable {...args} />
);
// export const table = Template.bind({});
// table.args = {

// }

