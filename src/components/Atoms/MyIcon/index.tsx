import {
  GridViewOutlined,
  PeopleAltOutlined,
  DeleteForeverOutlined,
  GavelOutlined,
  SearchOutlined,
  DescriptionOutlined,
  InsertChartOutlinedOutlined,
  ManageAccountsOutlined,
  ArticleOutlined,
  KeyboardArrowDownOutlined,
  ArrowBackOutlined,
  FilterListOutlined,
  MoreVertOutlined,
  AddBoxOutlined,
  FileDownloadOutlined,
  CloseOutlined,
  ContentCopyRounded,
  AttachmentOutlined,
  ShieldOutlined,
  PhoneOutlined,
  PlaceOutlined,
  CalendarTodayOutlined,
  CheckCircleOutlined,
  BadgeOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  MailOutlineOutlined,
  EventOutlined,
  Inventory2Outlined,
  KeyboardArrowUpOutlined,
  AccessTimeOutlined,
  PersonOutlineOutlined,
  LogoutOutlined,
  InsertInvitationOutlined,
} from "@mui/icons-material";

type Props = {
  icon: string;
  colour?: string;
};

const MyIcon = ({ icon, colour }: Props) => {
  // <MyIcon {icon = 'dashboard',color='edo'}/>

  switch (icon) {
    case "dashboard":
      return <GridViewOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "candidates":
      return <PeopleAltOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "hammer1":
      return <GavelOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "logs":
      return (
        <DescriptionOutlined sx={{ color: colour }} data-testid="myicon" />
      );
    case "analytics":
      return (
        <InsertChartOutlinedOutlined
          sx={{ color: colour }}
          data-testid="myicon"
        />
      );
    case "account":
      return (
        <ManageAccountsOutlined sx={{ color: colour }} data-testid="myicon" />
      );
    case "screening":
      return <ArticleOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "downArrow":
      return (
        <KeyboardArrowDownOutlined
          sx={{ color: colour }}
          data-testid="myicon"
        />
      );
    case "backArrow":
      return <ArrowBackOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "search":
      return <SearchOutlined sx={{ color: colour }} data-testid="myicon" />; // from here set
    case "filter":
      return <FilterListOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "more":
      return <MoreVertOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "add":
      return <AddBoxOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "export":
      return (
        <FileDownloadOutlined sx={{ color: colour }} data-testid="myicon" />
      );
    case "close":
      return <CloseOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "copy":
      return <ContentCopyRounded sx={{ color: colour }} data-testid="myicon" />;

    case "attachment":
      return <AttachmentOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "security":
      return <ShieldOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "phone":
      return <PhoneOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "location":
      return <PlaceOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "calendar":
      return (
        <CalendarTodayOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    case "clear":
      return (
        <CheckCircleOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    case "name":
      return <BadgeOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "unhide":
      return <VisibilityOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "hide":
      return (
        <VisibilityOffOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    case "package":
      return <Inventory2Outlined sx={{ color: colour }} data-testid="myicon" />;

    case "upArrow":
      return (
        <KeyboardArrowUpOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    case "clock":
      return <AccessTimeOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "user":
      return (
        <PersonOutlineOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    case "email":
      return (
        <MailOutlineOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    case "calendar2":
      return <EventOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "logout":
      return <LogoutOutlined sx={{ color: colour }} data-testid="myicon" />;

    case "hammer2":
      return <GavelOutlined sx={{ color: colour }} data-testid="myicon" />;
    case "invite":
      return (
        <InsertInvitationOutlined sx={{ color: colour }} data-testid="myicon" />
      );

    default:
      return (
        <DeleteForeverOutlined sx={{ color: colour }} data-testid="myicon" />
      );
  }
};

export default MyIcon;
