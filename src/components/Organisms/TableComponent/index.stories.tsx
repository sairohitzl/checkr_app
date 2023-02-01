import TableComponent from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { candidatesList, courtData } from "../../../utils/constants";

export default {
  title: "Organisms/TableComponent",
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args) => (
  <TableComponent {...args} />
);

export const CourtTable = Template.bind({});
CourtTable.args = {
  data: courtData,
};

export const CandidatesTable = Template.bind({});
CandidatesTable.args = {
  data: candidatesList,
};
