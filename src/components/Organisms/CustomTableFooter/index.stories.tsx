import CustomTableFooter from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DataGrid } from "@mui/x-data-grid";

export default {
  title: "Organisms/CustomTableFooter",
  component: CustomTableFooter,
} as ComponentMeta<typeof CustomTableFooter>;

const Template: ComponentStory<typeof CustomTableFooter> = (args) => (
  <DataGrid
    components={{
      Footer: () => <CustomTableFooter {...args} />,
    }}
    columns={[]}
    rows={[]}
  />
);
export const Footer = Template.bind({});
Footer.args = {};
