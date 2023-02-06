import React, { useState } from "react";
import LeftNavBar from "../Organisms/LeftNavBar";
import LeftNavigationbar from "../Templates";
import { menuItems } from "../../utils/constants";
import PageHeader from "../Organisms/PageHeader";
import IconTextButton from "../Molecules/IconTextButton";
import CandidateTable from "../Organisms/CandidateTable";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ExportCard from "../Organisms/ExportCard";
import { CSVLink, CSVDownload } from "react-csv";
import { getCandidates } from "../../utils/service";

const CandidatesPage = () => {
  let navigate: NavigateFunction = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ExportCard open={open} handleClose={handleClose} />
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
