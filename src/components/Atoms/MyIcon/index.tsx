
import {GridViewOutlined,
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
        LogoutOutlined
        } 
from '@mui/icons-material';

type Props = {
  icon : string;
  colour?: string;
}

const MyIcon = ({icon,colour}: Props) => {  // <MyIcon {icon = 'dashboard',color='edo'}/>

  switch(icon){
  case 'dashboard':
    return  (<GridViewOutlined sx={{color:colour}}/>);
  case 'candidates':
    return  (<PeopleAltOutlined sx={{color:colour}}/>);
  case 'hammer1':
    return (<GavelOutlined sx={{color:colour}}/>);
  case 'logs':
    return (<DescriptionOutlined sx={{color:colour}}/>)
  case 'analytics':
    return (<InsertChartOutlinedOutlined sx={{color:colour}}/>)
  case 'account':
    return (<ManageAccountsOutlined sx={{color:colour}}/>)
  case 'screening':
    return (<ArticleOutlined sx={{color:colour}}/>)
  case 'downArrow':
    return (<KeyboardArrowDownOutlined sx={{color:colour}}/>)
  case 'backArrow':
    return (<ArrowBackOutlined sx={{color:colour}}/>)
  case 'search': 
    return (<SearchOutlined sx={{color:colour}}/>) // from here set
  case 'filter':
    return (<FilterListOutlined sx={{color:colour}}/>)
  case 'more':
    return (<MoreVertOutlined sx={{color:colour}}/>)
  case 'add':
    return (<AddBoxOutlined sx={{color:colour}}/>)
  case 'export':
    return (<FileDownloadOutlined sx={{color:colour}}/>)
  case 'close':
    return (<CloseOutlined sx={{color:colour}}/>)

  case 'copy':
    return (<ContentCopyRounded sx={{color:colour}}/>)

  case 'attachment':
    return (<AttachmentOutlined sx={{color:colour}}/>)
  
  case 'security':
    return (<ShieldOutlined sx={{color:colour}}/>)
  
  case 'phone':
    return (<PhoneOutlined sx={{color:colour}}/>)
  
  case 'location':
    return (<PlaceOutlined sx={{color:colour}}/>)
  
  case 'calendar':
    return (<CalendarTodayOutlined sx={{color:colour}}/>)
  
  case 'clear':
    return (<CheckCircleOutlined sx={{color:colour}}/>)
  
  case 'name':
    return (<BadgeOutlined sx={{color:colour}}/>)
  
  case 'unhide':
    return (<VisibilityOutlined sx={{color:colour}}/>)
  
  case 'hide':
    return (<VisibilityOffOutlined sx={{color:colour}}/>)

  case 'package':
    return (<Inventory2Outlined sx={{color:colour}}/>)
    
  case 'uparrow':
    return (<KeyboardArrowUpOutlined sx={{color:colour}}/>)
  
  case 'clock':
    return (<AccessTimeOutlined sx={{color:colour}}/>)

  case 'user':
    return (<PersonOutlineOutlined sx={{color:colour}}/>)
  
  case 'email':
    return (<MailOutlineOutlined sx={{color:colour}}/>)
  
  case 'calendar2':
    return (<EventOutlined sx={{color:colour}}/>)
  
  case 'logout':
    return (<LogoutOutlined sx={{color:colour}}/>)
  
  case 'hammer2':
      return (<GavelOutlined sx={{color:colour}}/>);
  
  default:
    return (<DeleteForeverOutlined sx={{color:colour}}/>)
  }
  
}

export default MyIcon
