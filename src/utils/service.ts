import Candidate from "./candidate";
import axios, { AxiosResponse } from "axios";

import { CANDIDATES_URL } from "./url";
import { UserInfoProps } from "../components/Molecules/UserInfo";

export const getCandidates = async () => {
  let candidatesList: Candidate[] | null = [];
  await axios
    .get(CANDIDATES_URL)
    .then((res) => {
      candidatesList = res.data;
    })
    .catch((err) => console.log("cannot get candidatesList " + err));
  return candidatesList;
};

export const getCandidateDetails = async (candidateId: string) => {
  let candidateDetails: Candidate | null = null;
  await axios
    .get(CANDIDATES_URL + "/" + candidateId)
    .then((res: AxiosResponse<Candidate>) => {
      candidateDetails = res.data;
    })
    .catch((err) => console.log("cannot fetch candidate Details " + err));
  return candidateDetails;
};

export const candidateDetailsToDropdown = (candidateDetails: Candidate) => {
  let cardsInfo: UserInfoProps[] = [];
  cardsInfo = [
    {
      title: "Name",
      name: candidateDetails.name,
      icon: "user",
    },
    { title: "Email", name: candidateDetails.email, icon: "email" },
    {
      title: "DOB",
      name: candidateDetails.dob,
      icon: "invite",
    },
    {
      title: "Phone",
      name: candidateDetails.phone,
      icon: "phone",
    },
    {
      title: "Zipcode",
      name: candidateDetails.zipcode,
      icon: "location",
    },
    {
      title: "Social Security",
      name: candidateDetails.socialSecurity,
      icon: "security",
    },
    {
      title: "Drivers License",
      name: candidateDetails.driverLicense,
      icon: "invite",
    },
    {
      title: "Created At",
      name: candidateDetails.createdAt,
      icon: "calendar",
    },
  ];

  return cardsInfo;
};

export const candidateDetailsToReports = (candidateDetails: Candidate) => {
  let cardsInfo: UserInfoProps[] = [];
  cardsInfo = [
    {
      title: "Status",
      name: candidateDetails.status,
      icon: "clear",
    },
    {
      title: "Adjudication",
      name: candidateDetails.adjudication,
      icon: "hammer1",
    },
    {
      title: "Package",
      name: candidateDetails.package,
      icon: "package",
    },
    {
      title: "Created At",
      name: candidateDetails.createdAt,
      icon: "calendar",
    },
    {
      title: "Completed Date",
      name: candidateDetails.completedDate,
      icon: "calendar2",
    },
    {
      title: "Turn Around Time",
      name: candidateDetails.turnAroundTime,
      icon: "clock",
    },
  ];
  return cardsInfo;
};

export const setEngage = (candidate: Candidate) => {
  axios
    .put(`${CANDIDATES_URL}/${candidate.id}`, {
      ...candidate,
      adjudication: "ENGAGE",
      status: "CLEAR",
    })
    .catch((err) => console.log("cannot fetch candidateDetails " + err));
};

export const setAdverseAction = (candidate: Candidate) => {
  axios
    .put(`${CANDIDATES_URL}/${candidate.id}`, {
      ...candidate,
      adjudication: "ADVERSE ACTION",
      status: "CONSIDER",
    })
    .catch((err) => console.log("cannot fetch candidate Details " + err));
};
