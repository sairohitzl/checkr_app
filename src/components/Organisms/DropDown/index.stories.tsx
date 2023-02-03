import DropDown from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { userInfoData, userReportData } from "../../../utils/constants";
export default {
  title: "Organisms/DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const candidateInfo = Template.bind({});
candidateInfo.args = {
  title: "Candidate Information",
  data: userInfoData,
  show: false,
};
export const candidateReportInfo = Template.bind({});
candidateReportInfo.args = {
  title: "Report Information",
  data: userReportData,
  show: false,
};
