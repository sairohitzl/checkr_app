import React, { useState } from "react";
import LeftNavBar from "../Organisms/LeftNavBar";
import LeftNavigationbar from "../Templates";
import { menuItems } from "../../utils/constants";
import PageHeader from "../Organisms/PageHeader";
import IconTextButton from "../Molecules/IconTextButton";
import CandidateTable from "../Organisms/CandidateTable";
import { NavigateFunction, useNavigate } from "react-router-dom";
type Props = {};

const CandidatesPage = (props: Props) => {
  let navigate: NavigateFunction = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
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
                onClick={() => setOpen(!open)}
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