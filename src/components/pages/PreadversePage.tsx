import React, { useEffect, useState } from "react";
import { menuItems } from "../../utils/constants";
import LeftNavBar from "../Organisms/LeftNavBar";
import PageHeader from "../Organisms/PageHeader";
import LeftNavigationbar from "../Templates";
import MailTemplate from "../Organisms/MailTemplate";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { getCandidateDetails } from "../../utils/service";
import CandidateType from "../../utils/candidate";

const PreAdversePage = () => {
  let { candidateId } = useParams<{ candidateId: string }>();
  const [candidate, setcandidate] = useState<CandidateType>();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const charges = [
    ["Driving while license suspended", false],
    ["Assault Domestic Violence", false],
    ["Unable to verify employment history at Dunder Mifflin", false],
  ];

  let navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    getCandidateDetails(candidateId ?? "1").then((res) => {
      setcandidate(res!);
    });
  }, []);

  return (
    <LeftNavigationbar
      leftNav={<LeftNavBar data={menuItems} />}
      navHeader={
        <PageHeader
          leading={true}
          leadingClick={"/candidateDetails/" + candidateId}
          title={"Pre-Adverse Action Notice"}
          navigate={navigate}
        />
      }
      body={[
        <MailTemplate
          candidate={candidate!}
          handleClose={handleClose}
          charges={charges}
          openAdverse={open}
          setOpenPreAdverse={setOpen}
          navigate={navigate}
        />,
      ]}
    />
  );
};
export default PreAdversePage;
