import { UserInfoProps } from "../components/Molecules/UserInfo";
import { IconTextProps } from "../components/Molecules/IconText";
import { MyTableDataProps } from "../components/Organisms/TableComponent";
import CandidateType from "./candidate";

export const userInfoData: UserInfoProps[] = [
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
  { title: "Name", name: "John Smith", icon: "user" },
];

export const userReportData: UserInfoProps[] = [
  { title: "Status", name: "Clear", icon: "clear" },
  { title: "Adjudication", name: "-", icon: "hammer1" },
  { title: "Package", name: "Employee pro", icon: "package" },
  { title: "Created At", name: "Dec 1, 2016 12:00:00 PM", icon: "calendar" },
  {
    title: "Completed Date",
    name: "Dec 4, 2016 12:00:00 PM",
    icon: "calendar2",
  },
  { title: "Turn Around Time", name: "1 Day , 14 hours", icon: "clock" },
];

export const menuItems: IconTextProps[] = [
  { title: "Home", active: false, icon: "dashboard" },
  { title: "Candidates", active: true, icon: "candidates" },
  { title: "Adverse Actions", active: false, icon: "hammer2" },
  { title: "Logs", active: false, icon: "logs" },
  { title: "Analytics", active: false, icon: "analytics" },
  { title: "Account", active: false, icon: "account" },
  { title: "Screenings", active: false, icon: "screening" },
];

export const candidatesList: MyTableDataProps = {
  headers: [
    { text: "NAME", leftAlign: true },
    { text: "ADJUDICATION", leftAlign: true },
    { text: "STATUS", leftAlign: true },
    { text: "LOCATION", leftAlign: true },
    { text: "DATE", leftAlign: false },
  ],
  body: [
    [
      { text: "John Smith", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "Barouallie", variant: "text" },
      { text: "2/22/2022", variant: "date" },
    ],
    [
      { text: "Serene", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "Vanersborg", variant: "text" },
      { text: "3/13/2022", variant: "date" },
    ],
    [
      { text: "Walsh", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CONSIDER", variant: "status", statustype: "yellow" },
      { text: "Sukamanah", variant: "text" },
      { text: "2/22/2022", variant: "date" },
    ],
    [
      { text: "Maurizia", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "Sukamanah", variant: "text" },
      { text: "2/22/2022", variant: "date" },
    ],
    [
      { text: "John Smith", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "Barouallie", variant: "text" },
      { text: "2/22/2022", variant: "date" },
    ],
    [
      { text: "Serene", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "yellow" },
      { text: "Vanersborg", variant: "text" },
      { text: "3/13/2022", variant: "date" },
    ],
    [
      { text: "Walsh", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CONSIDER", variant: "status", statustype: "yellow" },
      { text: "Sukamanah", variant: "text" },
      { text: "2/22/2022", variant: "date" },
    ],
    [
      { text: "Maurizia", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "Sukamanah", variant: "text" },
      { text: "2/22/2022", variant: "date" },
    ],
    [
      { text: "Satish", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },

      { text: "Vanersborg", variant: "text" },
      { text: "3/13/2022", variant: "date" },
    ],
    [
      { text: "Anand", variant: "interactivetext" },
      { text: "-", variant: "text" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "Vanersborg", variant: "text" },
      { text: "3/13/2022", variant: "date" },
    ],
  ],
};

export const courtData: MyTableDataProps = {
  headers: [
    { text: "SEARCH", leftAlign: true },
    { text: "STATUS", leftAlign: true },
    { text: "DATE", leftAlign: false },
  ],
  body: [
    [
      { text: "SSN Verification", variant: "interactivetext" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "02/22/2022", variant: "date" },
    ],
    [
      { text: "Sex Offender", variant: "interactivetext" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "03/13/2022", variant: "date" },
    ],
    [
      { text: "Global Watchlist", variant: "interactivetext" },
      { text: "CONSIDER", variant: "status", statustype: "yellow" },
      { text: "08/23/2022", variant: "date" },
    ],
    [
      { text: "Federal Criminal", variant: "interactivetext" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "11/06/2022", variant: "date" },
    ],
    [
      { text: "County Criminal", variant: "interactivetext" },
      { text: "CLEAR", variant: "status", statustype: "green" },
      { text: "08/17/2022", variant: "date" },
    ],
  ],
};

export const candidatesTableList: CandidateType[] = [
  {
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
  },
  {
    id: 2,
    name: "Serene",
    email: "Serene.smith@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Vanersborg",
    date: "3/13/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 3,
    name: "Walsh",
    email: "Walsh.smith@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 4,
    name: "Maurizia",
    email: "Maurizia.smith@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "7/20/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 5,
    name: "Kendre",
    email: "kendre@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Beutong Ateuh",
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
  },
  {
    id: 6,
    name: "Erastus",
    email: "erastus@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Hoviyn Am",
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
  },
  {
    id: 7,
    name: "Jereme",
    email: "jereme@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sharingol",
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
  },
  {
    id: 8,
    name: "John Smith",
    email: "John.smith@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
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
  },
  {
    id: 9,
    name: "Cari",
    email: "cari@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboao da Serra",
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
  },
  {
    id: 10,
    name: "Kimble",
    email: "kimble@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Veseli nad",
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
  },
  {
    id: 11,
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
  },
  {
    id: 12,
    name: "Serene",
    email: "Serene.smith@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Vanersborg",
    date: "3/13/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 13,
    name: "Walsh",
    email: "Walsh.smith@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 14,
    name: "Maurizia",
    email: "Maurizia.smith@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "7/20/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 15,
    name: "Kendre",
    email: "kendre@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Beutong Ateuh",
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
  },
  {
    id: 16,
    name: "Erastus",
    email: "erastus@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Hoviyn Am",
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
  },
  {
    id: 17,
    name: "Jereme",
    email: "jereme@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sharingol",
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
  },
  {
    id: 18,
    name: "John Smith",
    email: "John.smith@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
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
  },
  {
    id: 19,
    name: "Cari",
    email: "cari@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboao da Serra",
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
  },
  {
    id: 20,
    name: "Kimble",
    email: "kimble@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Veseli nad",
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
  },
  {
    id: 21,
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
  },
  {
    id: 22,
    name: "Serene",
    email: "Serene.smith@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Vanersborg",
    date: "3/13/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 23,
    name: "Walsh",
    email: "Walsh.smith@checkr.com",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 24,
    name: "Maurizia",
    email: "Maurizia.smith@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "7/20/2022",
    dob: "1990-09-10",
    phone: "(555) 555-5555",
    zipcode: "94158",
    socialSecurity: "XXX-XX-6789",
    driverLicense: "Barrouallie",
    createdAt: "Nov 20,2016 11:05:57 AM",
    package: "Employee Pro",
    completedDate: "Dec 4,2016 12:00:00 PM",
    turnAroundTime: "1 Day , 14 hours",
  },
  {
    id: 25,
    name: "Kendre",
    email: "kendre@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Beutong Ateuh",
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
  },
  {
    id: 26,
    name: "Erastus",
    email: "erastus@checkr.com",
    adjudication: "-",
    status: "CLEAR",
    location: "Hoviyn Am",
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
  },
];

export const adverseModalStrings = {
  name: "John Smith",
  preAdverse1: "Pre-Adverse Action Notice",
  demoEmail1: "james.rodriguez@checkr.com",
  demoEmail2: "james.rodriguez@checkr.com",
  preAdverse2: "Pre-adverse action notice - checkr-bpo",
  preAdverse3:
    "Please carefully review the list of charges (in bold) and your contact information.",

  preAdverse4:
    "Please note that we will send the corresponding post adverse action email automatically after 7 days.",
  preAdverse5: `You recently authorized checkr-bpo (???the company???) to obtain
  consumer reports and/or invistigate consumer reportsabout you from
  a consumer reporting agency. The Company is considering taking
  action in whole or in past on information in such report(s)
  including the following specific Boxs identified in the report
  prepared by Checkr, Inc.`,
  preAdverse6: `If you wish to dispute the accuracy of the information in the
  report directly with the consumer reporting agency (i.e., the
  source of the informationcontained in the report), you should
  contact the agency identifield above directly.`,
  preAdverse7: `Summary of right under the FCRA`,
};

export const headerVals = [
  "name",
  "adjudication",
  "status",
  "location",
  "date",
];
export const headerNames = {
  name: "NAME",
  adjudication: "ADJUDICATION",
  status: "STATUS",
  location: "LOCATION",
  date: "DATE",
};

export const adverseCharges = [
  "Driving while license suspended",
  "Assault Domestic Violence",
  "Unable to verify employment history at Dunder Mifflin",
];
