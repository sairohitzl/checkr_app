import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdverseModal from ".";
import CandidateType from "../../../utils/candidate";

const candidate: CandidateType = {
  id: 1,
  name: "John Smith",
  email: "John.smith@checkr.com",
  adjudication: "-",
  status: "CLEAR",
  location: "Barrouallie",
  date: "2/22/2022",
  dob: "1990-09-10",
  phone: "(555) 555-5555",
  zipcode: "94158",
  socialSecurity: "XXX-XX-6789",
  driverLicense: "Barrouallie",
  createdAt: "Nov 20,2016 11:05:57 AM",
  package: "Employee Pro",
  completedDate: "Dec 4,2016 12:00:00 PM",
  turnAroundTime: "1 Day , 14 hours",
};

const charges = [
  ["Driving while license suspended", false],
  ["Assault Domestic Violence", false],
  ["Unable to verify employment history at Dunder Mifflin", false],
];

test("testing adverse modal", () => {
  const { getByTestId } = render(
    <AdverseModal
      open={true}
      handleClose={() => {}}
      candidate={candidate}
      charges={charges}
    />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("adversemodal");
  expect(id).toBeInTheDocument();
});
