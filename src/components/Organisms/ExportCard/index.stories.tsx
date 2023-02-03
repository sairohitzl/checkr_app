import ExportCard from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organisms/ExportCard",
  component: ExportCard,
} as ComponentMeta<typeof ExportCard>;

const Template: ComponentStory<typeof ExportCard> = (args) => (
  <ExportCard {...args} />
);

export const ExportCard1 = Template.bind({});
ExportCard1.args = {
  open: false,
};
