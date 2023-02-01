import CustomTableHeader from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DataGrid } from "@mui/x-data-grid";

export default{
    title: "Organisms/CustomTableHeader",
    component: CustomTableHeader
} as ComponentMeta<typeof CustomTableHeader>;

const Template: ComponentStory<typeof CustomTableHeader> = (args)=>(
    <DataGrid  components={{
        Header: () => <CustomTableHeader {...args} />
    }} columns={[]} rows={[]}
    hideFooterPagination/>


)
export const Header = Template.bind({})
Header.args={}