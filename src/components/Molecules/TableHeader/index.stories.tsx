import TableHeader from ".";
import {ComponentMeta,ComponentStory} from "@storybook/react";

export default {
    title: "Molecules/TableHeader",
    component: TableHeader
} as ComponentMeta<typeof TableHeader>

const Template : ComponentStory<typeof TableHeader> = (args) => <TableHeader {...args}/>

export const thright = Template.bind({})
thright.args = {
    leftAlign:true,
    text:"NAME"
}

export const thleft = Template.bind({});
thleft.args = {
  text: "DATE",
  leftAlign: false,
};