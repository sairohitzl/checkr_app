import { Box } from '@mui/material'
import theme from '../../../theme/theme'
import MyIcon from '../../Atoms/MyIcon'
import Typography from '../../Atoms/Typography'


export type UserInfoProps= {
    title: string;
    name: string;
    icon: string;
}

const UserInfo = (props: UserInfoProps) => {
    const {title,name,icon} = props
  return (
   <Box sx={{
    display : "flex",
    padding: "12px",
    background: "#FAFAFC",
    // width: "330px",
    // height: "68px",
    border: "1px solid #E5E7ED",
    borderRadius: "12px"
   }}>
    <Box
        sx={{
          padding: "14px",
          borderRadius: "12px",
          background: theme.palette.text.disabled,
          border: "1px solid #E5E7ED",
         
        }}
      >
        <MyIcon icon={icon} colour={theme.palette.primary['400']} />
      </Box>

      <Box sx={{
        display : "flex",
        flexDirection : "column",
        background: "#FAFAFC",
        justifyContent: "space-evenly",
        padding: "0px 0px 0px 12px",
      }}>
        <Typography variant='body2' color={theme.palette.text.secondary} >{title}</Typography>
        <Typography variant='body2' sx={{
          fontWeight:500,
          lineHeight: '20px',
  }}>{name}</Typography> 
      </Box>

   </Box>
  )
}

export default UserInfo