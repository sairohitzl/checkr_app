import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import CandidateType from "../../utils/candidate";
import {
  candidateDetailsToDropdown,
  candidateDetailsToReports,
  getCandidates,
  setEngage,
} from "../../utils/service";
import { UserInfoProps } from "../Molecules/UserInfo";
import { getCandidateDetails } from "../../utils/service";
import LeftNavigationbar from "../Templates";
import LeftNavBar from "../Organisms/LeftNavBar";
import PageHeader from "../Organisms/PageHeader";
import ButtonElement from "../Atoms/Button";
import { courtData, menuItems } from "../../utils/constants";
import DropDown from "../Organisms/DropDown";
import InfoLabel from "../Molecules/InfoLabel";
import TableComponent from "../Organisms/TableComponent";
import { Box } from "@mui/material";

type Props = {};

const CandidateDetailPage = (props: Props) => {
  let { candidateId } = useParams<{ candidateId: string }>();
  let navigate: NavigateFunction = useNavigate();
  const [candidate, setCandidate] = useState<CandidateType>();
  const [candidateInfo, setCandidateInfo] = useState<UserInfoProps[]>([]);
  const [candReportData, setCandReportData] = useState<UserInfoProps[]>([]);
  useEffect(() => {
    getCandidateDetails(candidateId ?? "1").then((res: any) => {
      setCandidate(res!);
      setCandidateInfo(candidateDetailsToDropdown(res!));
      setCandReportData(candidateDetailsToReports(res!));
    });
  }, []);

  return (
    <LeftNavigationbar
      leftNav={<LeftNavBar data={menuItems} />}
      navHeader={
        <PageHeader
          leading={true}
          leadingClick={"/"}
          title={candidate?.name ?? "John"}
          actions={[
            <ButtonElement
              label="Pre Adverse Action"
              variant="secondary"
              onClick={() => navigate("/preAdverse/" + candidateId)}
            />,
            <ButtonElement
              label="Engage"
              variant="primary"
              onClick={() => {
                setEngage(candidate!);
                navigate("/");
              }}
            />,
          ]}
          navigate={navigate}
        />
      }
      body={[
        <DropDown
          title="Candidate Information"
          data={candidateInfo}
          show={false}
        />,
        <DropDown
          title="Report Information"
          data={candReportData}
          show={false}
        />,
        <Box
          sx={{
            borderRadius: "8px",
            boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
          }}
        >
          <InfoLabel title={"Court Searches"} />
          <TableComponent data={courtData} />
        </Box>,
      ]}
    />
  );
};

export default CandidateDetailPage;
