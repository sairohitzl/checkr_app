import AdverseModal from ".";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { candidatesTableList } from "../../../utils/constants";

export default {
  title: "Organisms/AdverseModal",
  component: AdverseModal,
} as ComponentMeta<typeof AdverseModal>;

const Template: ComponentStory<typeof AdverseModal> = (args) => (
  <AdverseModal {...args} />
);
export const BasicPreAdverseModal = Template.bind({});
BasicPreAdverseModal.args = {
  open: true,
  handleClose: () => {},
  candidate: candidatesTableList[0],
  charges: [
    ["Driving while license suspended", true],
    ["Assault Domestic Violence", true],
    ["Unable to verify employment history at Dunder Mifflin", false],
  ],
};
