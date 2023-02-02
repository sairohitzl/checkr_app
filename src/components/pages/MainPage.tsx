import React from "react";
import LeftNavBar from "../Organisms/LeftNavBar";
import LeftNavigationbar from "../Templates";
import { menuItems } from "../../utils/constants";
import PageHeader from "../Organisms/PageHeader";
import IconTextButton from "../Molecules/IconTextButton";
import CandidateTable from "../Organisms/CandidateTable";
type Props = {};

const CandidatesPage = (props: Props) => {
  return (
    <>
      <LeftNavigationbar
        leftNav={<LeftNavBar data={menuItems} />}
        navHeader={
          <PageHeader
            title={"Candidates"}
            actions={[
              <IconTextButton
                icon={"export"}
                label={"Export"}
                variant={"secondary"}
              />,
              <IconTextButton
                icon={"add"}
                label={"Manual Order"}
                variant={"primary"}
              />,
            ]}
          />
        }
        body={[<CandidateTable />]}
      ></LeftNavigationbar>
    </>
  );
};

export default CandidatesPage;
