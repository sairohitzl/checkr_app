import LeftNavigationbar from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LeftNavBar from "../Organisms/LeftNavBar";
import PageHeader from "../Organisms/PageHeader";
import {
  userInfoData,
  courtData,
  menuItems,
  userReportData,
  candidatesTableList,
} from "../../utils/constants";
import DropDown from "../Organisms/DropDown";
import InfoLabel from "../Molecules/InfoLabel";
import TableComponent from "../Organisms/TableComponent";
import IconTextButton from "../Molecules/IconTextButton";
import ButtonElement from "../Atoms/Button";
import CandidateTable from "../Organisms/CandidateTable";
import { Box } from "@mui/material";
import MailTemplate from "../Organisms/MailTemplate";

export default {
  title: "Templates/LeftNavigationBar",
  component: LeftNavigationbar,
} as ComponentMeta<typeof LeftNavigationbar>;

const Template: ComponentStory<typeof LeftNavigationbar> = (args) => (
  <LeftNavigationbar {...args} />
);

export const CandidateDetails = Template.bind({});
CandidateDetails.args = {
  leftNav: <LeftNavBar data={menuItems} />,
  navHeader: (
    <PageHeader
      leading={true}
      title={"John Smith"}
      actions={[
        <ButtonElement label="Pre Adverse Action" variant="secondary" />,
        <ButtonElement label="Engage" variant="primary" />,
      ]}
    />
  ),
  body: [
    <DropDown
      title={"Candidate Information"}
      data={userInfoData}
      show={false}
    />,
    <DropDown
      title={"Report Information Information"}
      data={userReportData}
      show={false}
    />,
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
      }}
    >
      <InfoLabel title="Court Searches" />
      <TableComponent data={courtData} />
    </Box>,
  ],
};

export const candidates = Template.bind({});
candidates.args = {
  leftNav: <LeftNavBar data={menuItems} />,
  navHeader: (
    <PageHeader
      leading={false}
      title={"Candidates"}
      actions={[
        <IconTextButton label="Export" icon="export" variant={"secondary"} />,
        <IconTextButton label="Manual Order" icon="add" variant={"primary"} />,
      ]}
    />
  ),

  body: [<CandidateTable />],
};

export const mailmodal = Template.bind({});
mailmodal.args = {
  leftNav: <LeftNavBar data={menuItems} />,
  navHeader: <PageHeader leading={false} title={"Pre-Adverse Action Notice"} />,

  body: [
    <MailTemplate
      candidate={candidatesTableList[0]}
      openAdverse={false}
      handleClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      charges={[
        ["Driving while license suspended", false],
        ["Assault Domestic Violence", false],
        ["Unable to verify employment history at Dunder Mifflin", false],
      ]}
    />,
  ],
};
