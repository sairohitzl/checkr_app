import MailTemplate from ".";
import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { candidatesTableList } from "../../../utils/constants";

export default {
  title: "Organisms/MailTemplate",
  component: MailTemplate,
  parameters: {
    actions: {
      handles: ["click .btn"],
    },
  },
} as ComponentMeta<typeof MailTemplate>;

const Template: ComponentStory<typeof MailTemplate> = (args) => (
  <MailTemplate {...args} />
);
export const maildemo = Template.bind({});
maildemo.args = {
  candidate: candidatesTableList[0],
  openAdverse: false,
  handleClose: () => {},
  charges: [
    ["Driving while license suspended", false],
    ["Assault Domestic Violence", false],
    ["Unable to verify employment history at Dunder Mifflin", false],
  ],
};
