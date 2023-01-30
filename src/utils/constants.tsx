import {UserInfoProps} from '../components/Molecules/UserInfo'
import {IconTextProps} from '../components/Molecules/IconText'
import {MyTableDataProps} from '../components/Organisms/TableComponent'

export const userInfoData:  UserInfoProps[]  = [
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

export const userReportData:  UserInfoProps[]  = [
    { title: "Status", name: "Clear", icon: "clear" },
    { title: "Adjudication", name: "-", icon: "hammer1" },
    { title: "Package", name: "Employee pro", icon: "package" },
    { title: "Created At", name: "Dec 1, 2016 12:00:00 PM", icon: "calendar" },
    { title: "Completed Date", name: "Dec 4, 2016 12:00:00 PM", icon: "calendar2" },
    { title: "Turn Around Time", name: "1 Day , 14 hours", icon: "clock" },
  ];

export const IconTextData: IconTextProps[] = [
    {icon: "dashboard",title: "Home",active: false},
    {icon: "candidates",title: "Candidates",active: false},
    {icon: "hammer1",title: "Adverse Actions",active: false},
    {icon: "logs",title: "Logs",active: false},
    {icon: "analytics",title: "Analytics",active: false},
    {icon: "account",title: "Account",active: false},
    {icon: "screening",title: "Screenings",active: false},
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
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "Barouallie", variant: "text" },
        { text: "2/22/2022", variant: "date" },
      ],
      [
        { text: "Serene", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "Vanersborg", variant: "text" },
        { text: "3/13/2022", variant: "date" },
      ],
      [
        { text: "Walsh", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CONSIDER", variant: "status", statustype: 'yellow'},
        { text: "Sukamanah", variant: "text" },
        { text: "2/22/2022", variant: "date" },
      ],
      [
        { text: "Maurizia", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "Sukamanah", variant: "text" },
        { text: "2/22/2022", variant: "date" },
      ],
      [
        { text: "John Smith", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "Barouallie", variant: "text" },
        { text: "2/22/2022", variant: "date" },
      ],
      [
        { text: "Serene", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'yellow' },
        { text: "Vanersborg", variant: "text" },
        { text: "3/13/2022", variant: "date" },
      ],
      [
        { text: "Walsh", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CONSIDER", variant: "status", statustype: 'yellow' },
        { text: "Sukamanah", variant: "text" },
        { text: "2/22/2022", variant: "date" },
      ],
      [
        { text: "Maurizia", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "Sukamanah", variant: "text" },
        { text: "2/22/2022", variant: "date" },
      ],
      [
        { text: "Satish", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
  
        { text: "Vanersborg", variant: "text" },
        { text: "3/13/2022", variant: "date" },
      ],
      [
        { text: "Anand", variant: "interactivetext" },
        { text: "-", variant: "text" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
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
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "02/22/2022", variant: "date" },
      ],
      [
        { text: "Sex Offender", variant: "interactivetext" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "03/13/2022", variant: "date" },
      ],
      [
        { text: "Global Watchlist", variant: "interactivetext" },
        { text: "CONSIDER", variant: "status", statustype: 'yellow' },
        { text: "08/23/2022", variant: "date" },
      ],
      [
        { text: "Federal Criminal", variant: "interactivetext" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "11/06/2022", variant: "date" },
      ],
      [
        { text: "County Criminal", variant: "interactivetext" },
        { text: "CLEAR", variant: "status", statustype: 'green' },
        { text: "08/17/2022", variant: "date" },
      ],
    ],
  };

